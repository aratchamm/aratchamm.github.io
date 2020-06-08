/**
 *@function Playlist
 *Function for all of the playlist manipulation & functionalities
 */
var Playlist = (function(w, d, $, pub) {
  var list = [];

  pub.addSong = function(title, artist, image, source) {
    var song = {};
    song['title'] = title;
    song['artist'] = artist;
    song['image'] = image;
    song['source'] = source;

    list.push(song);
  };

  pub.getSong = function(index) {
    return list[index];
  };

  pub.getPlaylistLength = function() {
    return list.length;
  }

  return pub;
})(window, document, jQuery, {});

/**
 *@function Player
 *Function for all of the music player functionality/controls
 */
var Player = (function(w, d, $, pub) {
  var index = 0,
    audio = [],
    ticker = "",
    currMin = 0,
    currSec = 0,
    totalSec = 1, //Start at 1 to remove transition delay
    songDur = 0,
    songDurSec = 0,
    $duration = $('.duration'),
    $currPos = $('.duration .currPos'),
    $playPause = $('.playPauseBtn'),
    $next = $('.addtControls .next'),
    $prev = $('.addtControls .prev'),
    $loop = $('.addtControls .loop'),
    $title = $('.titleArtist .title'),
    $artist = $('.titleArtist .artist'),
    $featureImg = $('.featureImg'),
    $currTime = $('.timeLogs .currTime'),
    $totalDuration = $('.timeLogs .totalDuration');

  function checkOverflow(el){
     var curOverflow = el.style.overflow;
     if ( !curOverflow || curOverflow === "visible" )
        el.style.overflow = "hidden";

     var isOverflowing = el.clientWidth < el.scrollWidth 
        || el.clientHeight < el.scrollHeight;

     el.style.overflow = curOverflow;

     return isOverflowing;
  }
  
  pub.init = function() {
    $playPause.click(this.playPauseClick);
    $prev.click(this.prevSong);
    $next.click(this.nextSong);
    $loop.click(this.loopClick);
    $duration.click(this.jumpSong);
    pub.loadSong(false);
  };

  pub.playPauseClick = function() {
    var play = $playPause.hasClass('play');

    if (play) {
      Player.playSong();
      $playPause.removeClass('play').addClass('pause');
    } else {
      Player.pauseSong();
      $playPause.removeClass('pause').addClass('play');
    }
  };

  pub.loadSong = function(play) {
    var song = Playlist.getSong(index);

    if(!audio[index]){
      console.log("add");
      audio[index] = new Audio();
      audio[index].src = song.source;
      audio[index].addEventListener('loadedmetadata', function() {
        var seconds = audio[index].duration,
          duration;
        seconds = Math.floor(seconds);

        if (seconds < 60) {
          duration = "0:" + seconds;
        } else {
          var min = Math.floor(seconds / 60),
            sec = seconds % 60;

          if(sec < 10){
            sec = "0"+sec;
          }
          duration = min + ":" + sec;
        }

        songDur = duration;
        songDurSec = seconds;
        $totalDuration.text(duration);
      });
    }
    audio[index].load();

    $title.text(song.title);
    $artist.text(song.artist);
    $featureImg.css('background-image', "url('" + song.image + "')");
    $currTime.text('0:00');
    
    // Variable Resets
    currMin = 0;
    currSec = 0;
    totalSec = 1;
    
    // Reset Cur Pos Bar
    $currPos.css('width', "0%");

    this.detectOverflow();
    
    if (play) {
      this.playSong();
    }
  };

  pub.updateCurrPos = function() {
    var percentage = (totalSec / songDurSec) * 100;
    percentage = (percentage > 100) ? 100 : percentage;

    $currPos.css('width', percentage + "%");
  };
  
  pub.jumpSong = function(e){
    var x               = e.pageX - $duration.offset().left,
        width           = $duration.outerWidth(),
        percentage      = x / width,
        percentageWidth = percentage * 100,
        pixelWidth      = width * percentage,
        songPos         = Math.round(songDurSec * percentage),
        posMin          = Math.floor(songPos / 60),
        posSec          = ((songPos % 60) < 10) ? "0" + (songPos % 60) : songPos % 60 ;
    
    Player.pauseSong();
    
    $currPos.removeClass('animate');
    $currPos.css('width', percentageWidth+"%");
    
    $currTime.text(posMin+":"+posSec);
    
    audio[index].currentTime = songPos;
    
    // Interval to wait for currPos bar to jump to position without animation
    var interval = setInterval(function(){
      if($currPos.outerWidth() == pixelWidth){
        clearInterval(interval);
        $playPause.removeClass('play').addClass('pause');
        Player.playSong();
      }
    }, 10);
  }

  pub.startTicker = function() {
    ticker = setInterval(function() {
      var time,
          currSec,
          sec,
          min;
      
      currSec = audio[index].currentTime;
      min = Math.floor(currSec / 60);
      sec = Math.round(currSec % 60);
      totalSec = currSec;
      
      if (sec < 10) {
        time = min + ":0" + sec;
        $currTime.text(time);
      } else {
        time = min + ":" + sec;
        $currTime.text(time);
      }

      Player.updateCurrPos();
      
      if (time == songDur) {
        Player.pauseTicker();
        
        if(index != (Playlist.getPlaylistLength() - 1)){
          index++;
          Player.loadSong(true);
        }else if($loop.hasClass('active')){
          index = 0; // Reset to Start
          Player.loadSong(true);
        }else{
          $playPause.removeClass('pause').addClass('play');
        }
      }
    }, 1000);
  };

  pub.pauseTicker = function() {
    clearInterval(ticker);
  };
  
  pub.detectOverflow = function(){
    if($title.text().length > 12){
      $title.marquee({
        //speed in milliseconds of the marquee
        duration: 3500,
        //gap in pixels between the tickers
        gap: 50,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 50,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
      });
    }
  };

  pub.playSong = function() {
    audio[index].play();
    $currPos.addClass('animate');
    this.startTicker();
  };

  pub.pauseSong = function() {
    audio[index].pause();
    $currPos.addClass('animate');
    this.pauseTicker();
  };

  pub.nextSong = function() {
    Player.pauseSong();
    
    index = (index == (Playlist.getPlaylistLength() - 1)) ? 0 : index + 1;
    if($playPause.hasClass('play')){
      Player.loadSong(false);
    }else{
      Player.loadSong(true);
    }
  };

  pub.prevSong = function() {
    Player.pauseSong();
    
    if(audio[index].currentTime < 5){
      index = (index == 0) ? Playlist.getPlaylistLength() - 1 : index - 1;
      if($playPause.hasClass('play')){
        Player.loadSong(false);
      }else{
        Player.loadSong(true);
      }
    }else{
      audio[index].currentTime = 0;
      
      $currPos.removeClass('animate');
      $currPos.css('width', '0');
      
      $currTime.text("0:00");
      
      var interval = setInterval(function(){
        if($currPos.outerWidth() == "0"){
          clearInterval(interval);
          $playPause.removeClass('play').addClass('pause');
          Player.playSong();
        }
      }, 10);
    }
  }
  
  pub.loopClick = function(){
    if($loop.hasClass('active')){
      $loop.removeClass('active');
    }else{
      $loop.addClass('active');
    }
  };

  return pub;
})(window, document, jQuery, {});

// Add Songs to Playlist
Playlist.addSong("Psycho", "Red Velvet", "https://www.img.in.th/images/dc2be8930bfc28c57ffd2013144a4298.jpg", "https://raw.githubusercontent.com/aratchamm/psycho_blog/master/Red%20Velvet%20-%20Psycho.mp3");

// Start Playlist
Player.init();