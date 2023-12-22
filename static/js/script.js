document.getElementById("next1").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/d68255d84b62418ba30ac7a8c430e118?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
    );
  };
  
  document.getElementById("next2").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/98f5cb455ad942e78bd424a541194d65?utm_campaign=embed&utm_source=other&size=medium&display-plan=true"
    );
  };
  document.getElementById("next3").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/e533781537b64b9fa64fb70c2423ad05?utm_campaign=embed&utm_source=other&heading=323.13&pitch=2.74&field-of-view=75&size=medium&display-plan=true"
    );
  };
  

  document.getElementById("next4").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/195281c0c036432291abd3f46290651f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
    );
  };
  document.getElementById("next5").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/076bf5bb8cff4eba9fef4988b1f1d03e?utm_campaign=embed&utm_source=other&heading=314.2&pitch=-5.08&field-of-view=75&size=medium&display-plan=true"
    );
  };

  document.getElementById("next6").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/dab51dbc715344c9a6b006cc384bea9b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
    );
  };
  document.getElementById("next7").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/281af1618a5140b3b1de150a0d7dc0e1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
    );
    };
    document.getElementById("next8").onclick = function () {
      changeIframe(
        "iframe-con",
       "https://momento360.com/e/u/936ed3b827db499caad30f2f276b030c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
        );
      };

  
  document.getElementById("prev1").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/6c588a40a2a348d4a80e6df5014b873c?utm_campaign=embed&utm_source=other&heading=-9.78&pitch=6.42&field-of-view=50.85&size=medium&display-plan=true"
    );
  };
  
  document.getElementById("prev2").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/d68255d84b62418ba30ac7a8c430e118?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
    );
  };
  document.getElementById("prev3").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/98f5cb455ad942e78bd424a541194d65?utm_campaign=embed&utm_source=other&size=medium&display-plan=true"
    );
  };
  
  document.getElementById("prev4").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/e533781537b64b9fa64fb70c2423ad05?utm_campaign=embed&utm_source=other&heading=323.13&pitch=2.74&field-of-view=75&size=medium&display-plan=truee"
    );
  };

  document.getElementById("prev5").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/195281c0c036432291abd3f46290651f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
    );
  };
  document.getElementById("prev6").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/076bf5bb8cff4eba9fef4988b1f1d03e?utm_campaign=embed&utm_source=other&heading=314.2&pitch=-5.08&field-of-view=75&size=medium&display-plan=true"
      );
  };
  document.getElementById("prev7").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/dab51dbc715344c9a6b006cc384bea9b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      );
  };
  document.getElementById("prev8").onclick = function () {
    changeIframe(
      "iframe-con",
      "https://momento360.com/e/u/281af1618a5140b3b1de150a0d7dc0e1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
    );
  };
  function changeIframe(iframeId, newSrc) {
    var iframe = document.createElement("iframe");
    iframe.src = newSrc;
    iframe.width = "700vw";
    iframe.height = "500vh";
  
    document.getElementById(iframeId).innerHTML = "";
    document.getElementById(iframeId).appendChild(iframe);
  }