gsap.registerPlugin(ScrollTrigger);
// navbar collapse

const gripLines = document.querySelector(".fa-grip-lines");
const closeBtn = document.querySelector(".close-btn");
const collapse = document.querySelector(".collapse-container");


gripLines.addEventListener("click", () => {
    collapse.classList.remove("hidden")
})

document.addEventListener("click", (e) => {
    const clickedInside = collapse.contains(e.target)
    const clickedToggle = gripLines.contains(e.target);

    if (!clickedInside && !clickedToggle) {
        gsap.to(".collapse-container", {
            y: -1000,
            
        })
    
        setTimeout(() => {
            collapse.classList.add("hidden")
        }, 200)
    }
})


//collapse animation


let tl = gsap.timeline({
    defaults: {
        duration: .2,
    }
})


gripLines.addEventListener("click", () => {
    tl.set(".collapse-container", {
        y:-1000
    }).to(".collapse-container", {
        y:0
    })
})

closeBtn.addEventListener("click", () => {
    tl.to(".collapse-container", {
        y: -1000,
        
    })

    setTimeout(() => {
        collapse.classList.add("hidden")
    }, 200)
})

// home section animation

tl.fromTo(".my-image", {
    x:500, 
    opacity: 0,
}, {
    x:100,
    opacity: 1,
    duration: 1,
}).fromTo(".home-content", {
    x: -500.,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
    duration: 1,
}, "<")

tl.to(".my-image", {
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    duration: 1
},"<")

gsap.fromTo(".my-image", {
    x:100,
    duration: 1,
    yoyo: true,
    repeat: -1,
}, {
    x: -100,
    duration: 2,
    yoyo:true,
    repeat: -1,
})

gsap.to(".text", {
    text: "Front-End Developer<br> focused on building clean, responsive websites that deliver real value to users.",
    delay: 1,
    duration: 2,
})


// about section animation

gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power1",
  });
  
  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play reverse play none"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power1",
  });



  // Projects Section

  const projectCat = document.querySelector(".project-category");
  const category = projectCat.querySelectorAll("button");
  projectCat.addEventListener("mouseenter", () => {

    category.forEach(cat => {
        cat.classList.toggle("hidden")
    });
    gsap.fromTo(".project-category button", {
        opacity: 0
    } , {
        opacity: 1
    })
  })
  projectCat.addEventListener("mouseleave", () => {
        category.forEach(cat => {
            cat.classList.toggle("hidden");
        })

        gsap.fromTo(".project-category button", {
            opacity: 0
        } , {
            opacity: 1
        })
  })

  category.forEach(cat => {
    cat.addEventListener("click", () => {

        category.forEach(b => b.classList.remove("clicked"));

        cat.classList.toggle("clicked")
    })
  })


  const projectSection = document.querySelector(".project-section");
  const projectContainer = document.querySelector(".project-container");
  const showMoreBtn = document.querySelector(".show-more button");
  
  const screenWidth = window.innerWidth;
  let limit;
  let heightMultiplier;
  
  if (screenWidth > 1680) {
      limit = 4;
      heightMultiplier = 30;
  } else if (screenWidth > 1000) {
      limit = 3;
      heightMultiplier = 30;
  } else if (screenWidth > 540) {
      limit = 2;
      heightMultiplier = 40;
  } else {
      limit = 1;
      heightMultiplier = 50;
  }
  
  const children = Array.from(projectContainer.children);
  
  if (children.length > limit) {
      children.forEach((child, index) => {
          if (index >= limit) {
              child.style.display = "none";
          }
      });
  
      showMoreBtn.classList.remove("hidden");
  
      const newBtn = showMoreBtn.cloneNode(true);
      newBtn.innerText = "show less"
      showMoreBtn.addEventListener("click", () => {
          children.forEach((child,index) => {
              child.style.display = "block";

              gsap.from(child, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: "bounce.out",
                delay: index * 0.1
              });
          });

          showMoreBtn.classList.add("hidden")
          document.querySelector(".show-more").appendChild(newBtn)
          newBtn.classList.remove("hidden");
          newBtn.addEventListener("click", () => {
            children.forEach((child,index) => {
                if (index >= limit) 
                    child.style.display = "none"

                newBtn.classList.add("hidden");
                showMoreBtn.classList.remove("hidden")
                window.location.href = "#project"
            })

          })
          
      });
  } else {
      projectSection.style.height = "auto";
  }


  //animation project section

  gsap.set(".card", {
    scale: 0,
    opacity: 0,
  })

  gsap.to(".card", {
    scrollTrigger: {
        trigger: ".project-section",
        start: "top 50%",
        toggleActions: "play none none none"  
    },
    scale: 1,
    opacity: 1,
    duration: .5,
    ease: "bounce.out",
    stagger: .2
  })


  //Skills Section

  document.querySelectorAll('.range').forEach(range => {
    let input = range.querySelector('input');
    let tooltip = range.querySelector('span');

    function updateTooltip() {
        let value = input.value;
        tooltip.textContent = value;

        let min = input.min || 0;
        let max = input.max || 100;
        let percent = ((value - min) / (max - min)) * 100;

        tooltip.style.left = `calc(${percent}% + (${8 - percent * 0.15}px))`;
        
    }
    

    updateTooltip(); 
    input.addEventListener('input', updateTooltip);

    
});


//skill section animation



gsap.from(
    ".range input",
    { 
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top 50%",
            toggleActions: "play none none none"
          },
        value: 0,
        duration: 1,
        stagger: 0.1
    }
  );

//blog section animation 
gsap.from(".blog-card", {
    scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%",
        toggleActions: "play none none none"
      },
    height: 0,
    ease: "power3",
    stagger: .2,
    duration: 1,
})



