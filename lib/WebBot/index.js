"use strict";

class BotWeb {

  static init(config){

    if (!BotWeb.instance) {
      var s = this;
      BotWeb.instance = new s(config);
    }
    return BotWeb.instance;

  }

  constructor(config) {
    this.Active = false;
    this.Database = {};
    this.Database["BotConfig"] = {};
    this.Database["BotConfig"]["input"] = config.input;
    this.Database["BotConfig"]["bot_name"] = config.name;
    this.Database["BotConfig"]["create_as"] = new Date();
    this.events();
    this.output();
    this.online();
  }

  events(){

    this.Database["EventsTrigger"] = {};
    this.Database["EventsTrigger"]["/search"] = function(msg){
          console.log(msg);
          msg = encodeURI(msg).trim();
          var url = "https://pt.wikipedia.org/w/api.php?action=query&list=search&origin=*&srsearch="+msg+"&format=json";
          $.get(url, function(res){
              var response = res.query.search[0];
              $(".BotWeb-Response").html(`<strong>${response.title}</strong><br/><p>${response.snippet}</p>`);
              $(".BotWeb-Response").css("display", "flex");
              $(".BotWeb-Modal").css("width", parseInt($(".BotWeb-Modal-Inputs").width()) + "px");
              $(".BotWeb-Response").css("width", "100%");
              $(".BotWeb-Response").addClass("animated bounceInDown");
              setTimeout(() => { $(".BotWeb-Response").removeClass("animated bounceInDown"); }, 4000);
              //var d = JSON.parse(Res);
              //console.log(d);
          });
      };
      this.Database["EventsTrigger"]["/temperature"] = function(msg){
          console.log("TEMPERATURE !!!");
      };
      this.Database["EventsTrigger"]["/andress"] = function(msg){
          console.log("ANDRESS !!!");
      };
      this.Database["EventsTrigger"]["/youtube"] = function(msg){
          console.log("SEARCH YOUTUBE !!!");
      };
      this.Database["EventsTrigger"]["/cotacao"] = function(msg){
          console.log("COTACAO !!!");
      };

  }

  output(){

    function NewObj(n, c){
      var v = document.createElement(n);
      v.className = c;
      return v;
    }

    var input = this.Database["BotConfig"]["input"],
        view = input.parentNode,
        clone = input,
        modal = NewObj("div", "BotWeb-Modal"),
        modalInputs = NewObj("div", "BotWeb-Modal-Inputs");

    var height = $(clone).height();

    input.remove();

    this.Database["Template"] = {};
    this.Database["Template"]["BotWebBot"] = `<div class='BotWeb-Bot animated bounceIn' style='height:${height}px !important'>BotWeb</div>`;
    modalInputs.append(clone[0]);
    $(modal).html("<div class='BotWeb-Response'></div>");
    modal.append(modalInputs);
    $("body").append(modal);
    this.Database["BotConfig"]["input"] = clone[0];

  }

  OnMessage(msg){

    var input = this.Database["BotConfig"]["input"],
        msgOrigin = msg,
        regexBot = /@botweb/ig,
        regexs = [
          /\/search/ig,
          /\/temperature/ig,
          /\/andress/ig,
          /\/youtube/ig,
          /\/cotacao/ig
        ];

    msg = msg.toLowerCase();
    if(this.Active){
      var t = regexs.filter((v) => {
          return v.test(msg) == true;
      });
      if(t.length > 0){
        var value = msg.replace(t[0], "").trim(),
            i = t[0].source.toString();
        var n = i.replace("/\//", "");
        n = "/" + n.substr(2);
        this.Database["EventsTrigger"][n](value);
      }
    }

    if(regexBot.test(msg) && this.Active == false){
      $(Bot.Database.Template.BotWebBot).insertBefore($(".BotWebInput"));
      $(".BotWeb-Modal").css("box-shadow","0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)");
      $(input).css("border-top-right-radius","3px");
      $(input).css("border-bottom-right-radius","3px");
      input.value = msg.replace(regexBot, "");
      this.Active = true;
      this.OnVerifyBotter(input);
    }

  }

  OnVerifyBotter(i){

    function Botter(){

          if($(i).val().length == 0 && $(".BotWeb-Response").css("display") == "flex"){

              $(".BotWeb-Response").html("");
              $(".BotWeb-Response").css("display","none");

          }

    }

    this.Database["OnBotter"] = setInterval(Botter, 4000);

  }

  online(){

    var input = this.Database["BotConfig"]["input"],
        self = this;
    $(".BotWebInput").keyup(function(e){
      self.OnMessage(input.value);
    });
    //this.OnMessage(input.value)

  }

  toString() {

    return JSON.stringify(this);

  }

}
