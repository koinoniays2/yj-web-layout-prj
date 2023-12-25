window.addEventListener("load", function () {
  const wrap = document.querySelector("#body");
  const section = document.querySelectorAll("section");
  let page = 0;
  const lastPage = section.length - 1;

  const home = document.querySelector("#logo");
  const singleMalt = document.querySelector(".btn1");
  const scotch = document.querySelector(".btn2");
  const cognac = document.querySelector(".btn3");
  home.addEventListener("click", () => {
    page = 0;
    wrap.style.top = page * -100 + 'vh';
    mainGsap();
  });
  singleMalt.addEventListener("click", () => {
    page = 1;
    wrap.style.top = page * -100 + 'vh';
    // singleMaltGsap(vibration);
    singleMaltGsap();
  });
  scotch.addEventListener("click", () => {
    page = 2;
    wrap.style.top = page * -100 + 'vh';
    scotchGsap();
  });
  cognac.addEventListener("click", () => {
    page = 3;
    wrap.style.top = page * -100 + 'vh';
    cognacGsap(glass);
  });

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      page++;
    } else if (e.deltaY < 0) {
      page--;
    }
    if (page < 0) {
      page = 0;
    } else if (page > lastPage) {
      page = lastPage;
    }
    wrap.style.top = page * -100 + 'vh';
    console.log(page);

    /* gsap 실행 페이지 */
    if (page === 0) {
      mainGsap();
    }else if (page === 1) {
      // singleMaltGsap(vibration);
      singleMaltGsap();
    }else if (page === 2) {
      scotchGsap();
    }else if (page === 3) {
      cognacGsap(glass);
    };
  }, { passive: false });

/* ---gsap-------------------------------------------------------------- */
/* ---main---------------------------------------- */
  function mainGsap() {
    let tl = gsap.timeline();
    tl.fromTo("#main span:nth-child(1)", {
      x: -1000,
      opacity: 0,
      duration: 2
    },{
      x: 0,
      opacity: 1
    })
    .fromTo("#main span:nth-child(2)", {
      x: 1000,
      opacity: 0
    },{
      x: 0,
      opacity: 1
    })
    .to("#main span:nth-child(2)", {
      opacity: 0
    })
    .to("#main span:nth-child(2)", {
      opacity: 1
    })
  }
  mainGsap();

/* ---single-malt---------------------------------------- */
  function singleMaltGsap() { //function singleMaltGsap(callback) 
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.fromTo(".malt-img", {
      scale: 3,
      // x: -1000,
      // y: -1000,
      opacity: 0
    }, {
      scale: 1,
      // x: 0,
      // y: 0,
      opacity: 1
      //onComplete: callback // gsap 애니메이션 완료 후에 callback 실행
    },0.5)
      .fromTo("#single-malt-article > h2", {
        y: -1000, opacity: 0
      }, {
        duration:0.3,
        y: 0,
        opacity: 1
      },'-=0.3')
      .fromTo("#single-malt-article > span", {
        y: 300, opacity: 0
      }, {
        duration:0.3,
        y: 0,
        opacity: 1
      })
      .fromTo(".malt-type div:nth-child(1)", {
        x: 500, opacity: 0
      }, {
        duration:0.3,
        x: 0, opacity: 1
      })
      .fromTo(".malt-type div:nth-child(2)", {
        x: 500, opacity: 0
      }, {
        duration:0.3,
        x: 0, opacity: 1
      })
      .fromTo(".malt-type div:nth-child(3)", {
        x: 500, opacity: 0
      }, {
        duration:0.3,
        x: 0, opacity: 1
      });
  }
/* ---scotch---------------------------------------- */
function scotchGsap() {
  let tl = gsap.timeline();
  tl.fromTo(".scotch-img", {
    scale: 3,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1
  },0.5)
    .fromTo("#scotch-article > h2", {
      y: -1000, opacity: 0
    }, {
      duration:0.3,
      y: 0,
      opacity: 1
    },'-=0.3')
    .fromTo("#scotch-article > span", {
      y: 300, opacity: 0
    }, {
      duration:0.3,
      y: 0,
      opacity: 1
    })
    .fromTo(".scotch-type div:nth-child(1)", {
      x: -500, opacity: 0
    }, {
      duration:0.3,
      x: 0, opacity: 1
    })
    .fromTo(".scotch-type div:nth-child(2)", {
      x: -500, opacity: 0
    }, {
      duration:0.3,
      x: 0, opacity: 1
    })
    .fromTo(".scotch-type div:nth-child(3)", {
      x: -500, opacity: 0
    }, {
      duration:0.3,
      x: 0, opacity: 1
    });
}
/* ---cognac---------------------------------------- */
function cognacGsap(callback) {
  let tl = gsap.timeline();
  tl.fromTo("#cognac-article > h2 > span", {
    opacity: 0,
    y: 0
  }, {
    opacity: 1,
    y: -50,
    stagger: {
      each: 0.05,
      from: 'start'
    },
    ease: "elastic(1, 2)" //강도0~1, 지속시간
  },0.5)
  .to("#cognac-article > h2 > span", {
    y:0,
    stagger: {
      each: 0.05,
      from: 'start'
    },
    ease: "bounce"
    // ease: "elastic(1, 2)"
  }, '-=0.7')
  .fromTo(".cognac-glass > img", {
    opacity: 0
  },{
    opacity: 1,
    onComplete: callback
  }, '-=1')
  .fromTo("#cognac-article > span", {
    y: 300, opacity: 0
  }, {
    duration:0.3,
    y: 0, opacity: 1
  },'-=0.1')
  .fromTo(".cognac-type div:nth-child(1)", {
    scale: 3, opacity: 0, x:500
  }, {
    scale: 1, opacity: 1, x:0
  }, '-=0.1')
  .fromTo(".cognac-type div:nth-child(2)", {
    scale: 3, opacity: 0, x:500
  }, {
    scale: 1, opacity: 1, x:0
  })
  .fromTo(".cognac-type div:nth-child(3)", {
    scale: 3, opacity: 0, x:500
  }, {
    scale: 1, opacity: 1, x:0
  });
}

  let glassImg = document.querySelector(".cognac-glass > img");
  function glass() {
    glassImg.classList.add("glass");
    setTimeout(() => {
      glassImg.classList.remove("glass");
    }, 500);
  }
  /*
  let vibrationImg = document.querySelector(".malt-img");
  function vibration() {
    vibrationImg.classList.add("vibration");
    setTimeout(function() {
      vibrationImg.classList.remove("vibration");
    }, 500);
  };
  */
});
// window.addEventListener('beforeunload', function () {
// });