class TitleScreen {
  private backstory: string[];
  private backstoryTimer: number;
  private menu: Imenu;
  private fade: number;
  private fadeAmount: number;
  private titleScreen: p5.Image;

  constructor(menu: Imenu) {
    this.backstory = ["Neo-Tokyo, Earth, 2076.", "The latest Intergalactic War and subsequent waves of Alien Invasion have left humanity at the verge of extinction, its cities deserted and crawling with Alien life forms on the lookout for any remaining signs of human activity.", "Your only chance of survival is to keep running, avoiding all contact while shooting as many Aliens as you can.", "Do you have what it takes to stay alive?"];
    this.backstoryTimer = 15000;
    this.menu = menu;

    //fade in and out for the press any key text
    this.fadeAmount = 1;
    this.fade = 40;

    //add the video to the variable titleScreen
    this.titleScreen = loadImage("./assets/imgs/titleGif.gif");
        
  }

 // TACK FÖR ART https://www.reddit.com/r/cyberpunkgame/comments/9big46/cyberpunk_2077_pixel_art_oc/
  draw() {

    if (keyIsPressed === true) {
      this.menu.menuState = "main";
    }
    
    image(this.titleScreen, 0, 0, width, height);
    
      //text for the logo
      textFont(outrunFont);
      textSize(50);
      fill(128, 0, 0);
      textAlign(CENTER);
      text("Cyberjump", 400, 200);

      // text for press any key
      textFont(pixelFont);
      textSize(20);
      fill(128, 0, 0, this.fade);
      textAlign(CENTER);
      text("Press any key", 400, 500);

      // text for backstory
      this.drawBackstoryInIntervals();    

      // making the text fade in and out
      if (this.fade <= 40) {
        this.fadeAmount = 5;
      } else if (this.fade > 255) {
        this.fadeAmount = -5;
      }
      this.fade += this.fadeAmount;
    
  }
  private drawBackstoryInIntervals() {
    textSize(13);
    fill(212,235,242);
    textAlign(LEFT);this.backstoryTimer -= deltaTime;

    if (this.backstoryTimer < 14000) {
      text(this.backstory[0], 50, 250);
    }
    if (this.backstoryTimer < 11000) {
      text(this.backstory[1], 50, 275, 700, 300);
    }
    if (this.backstoryTimer < 5000) {
      text(this.backstory[2], 50, 375, 700, 300);   
    }
    if (this.backstoryTimer < 0) {  
      text(this.backstory[3], 50, 450);  
    }
  }
}


