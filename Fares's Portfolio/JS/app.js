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
      toggleActions: "play reverse play none"
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
  } else if (screenWidth > 1200) {
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
  
      // Remove old listeners if any (optional)
      const newBtn = showMoreBtn.cloneNode(true);
      showMoreBtn.parentNode.replaceChild(newBtn, showMoreBtn);
  
      newBtn.addEventListener("click", () => {
          children.forEach(child => {
              child.style.display = "block";
          });
  
          newBtn.classList.add("hidden");
      });
  } else {
      projectSection.style.height = "auto";
  }






  


