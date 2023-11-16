const herochange = [
  {
    id: 0,
    title: "SOFTWAR ENGINEER?",
    titletColor: "rgb(54, 55, 56)",
    backgroundColor: "rgba(40, 238, 167, 0.93)",
  },
  {
    id: 1,
    title: "DATA ENGINEER?",
    titletColor: "rgb(255, 255, 255)",
    backgroundColor: "rgba(152, 100, 218, 0.93)",
  },
  {
    id: 2,
    title: "UI UX ENGINEER?",
    titletColor: "rgb(255, 255, 255)",
    backgroundColor: "rgba(251, 80, 142, 0.93)",
  },
];

const engineer=document.getElementById("engineer")

engineer.textContent=""
for(let j=0;j<herochange.length;j++)
{ 
  setTimeout(() => {
    engineer.textContent=""
    for(let i=0;i<herochange[j].title.length;i++){
      setTimeout(function(){engineer.textContent+=herochange[j].title[i]},i*300)
    }
  },1000+300*herochange[j].title.length);
 
}



const FSC = document.getElementById("FCS-btn");
const FSW = document.getElementById("FSW-btn");
const FSD = document.getElementById("FSD-btn");
const UIX = document.getElementById("UIX-btn");

const prog = {
  FCS: {
    abv: "FCS",
    title: "Foundations of Computer Science",
    text: "// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.",
    next: "next course date",
    color: "rgb(241, 170, 37)",
    image: "assets/fcs.png",
  },
  FSW: {
    abv: "FSW",
    title: "Full-Stack Web Development",
    text: "// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become professional software engineers. Participants will learn essential concepts such as Version Control, Object-Oriented Programming, Database Management Systems, MVC Design Patterns, Dependency Management, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, which will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.",
    next: "next bootcamp date",
    color: "rgb(0, 255, 170)",
    image: "assets/fsw.png",
  },
  FSD: {
    abv: "FSD",
    title: "Full-Stack Data",
    text: "/// SE Factory's 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.",
    next: "next bootcamp date",
    color: "rgb(158, 83, 158)",
    image: "assets/fsd.png",
  },
  UIX: {
    abv: "UIX",
    title: "UI/UX Design Bootcamp",
    text: "// SE Factory's 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.",
    next: "next bootcamp date",
    color: "pink",
    image: "assets/uix.png",
  },
};

console.log(prog.FCS.title);
const abv = document.getElementById("program-abv");
const nabv = document.getElementById("program-nabv");
const prog_desc = document.getElementById("program-descp");
const prog_window = document.getElementById("section4");
const program_img = document.getElementById("program-img");
const confirmed = document.getElementById("confirmed");
const next = document.getElementById("sec4next");


FSC.addEventListener("click", function () {
  abv.textContent = prog.FCS.abv;
  nabv.textContent = prog.FCS.title;
  prog_desc.textContent = prog.FCS.text;
  FSC.style.color = prog.FCS.color;
  confirmed.style.color = prog.FCS.color;
  prog_window.style.backgroundColor = prog.FCS.color;
  program_img.style.backgroundImage = `url(${prog.FCS.image})`;
  next.textContent = "next course date |";
  FSC.style.backgroundColor = "#363738";
  FSD.style.backgroundColor = prog.FCS.color;
  FSW.style.backgroundColor = prog.FCS.color;
  UIX.style.backgroundColor = prog.FCS.color;
});

FSW.addEventListener("click", function () {
  abv.textContent = prog.FSW.abv;
  nabv.textContent = prog.FSW.title;
  prog_desc.textContent = prog.FSW.text;
  FSW.style.color = prog.FSW.color;
  confirmed.style.color = prog.FSW.color;
  prog_window.style.backgroundColor = prog.FSW.color;
  program_img.style.backgroundImage = `url(${prog.FSW.image})`;
  next.textContent = "next bootcamp date |";
  FSW.style.backgroundColor = "#363738";
  FSD.style.backgroundColor = prog.FSW.color;
  FSC.style.backgroundColor = prog.FSW.color;
  UIX.style.backgroundColor = prog.FSW.color;
});
FSD.addEventListener("click", function () {
  abv.textContent = prog.FSD.abv;
  nabv.textContent = prog.FSD.title;
  prog_desc.textContent = prog.FSD.text;
  FSD.style.color = prog.FSD.color;
  confirmed.style.color = prog.FSD.color;
  prog_window.style.backgroundColor = prog.FSD.color;
  program_img.style.backgroundImage = `url(${prog.FSD.image})`;
  next.textContent = "next bootcamp date |";
  FSD.style.backgroundColor = "#363738";
  FSC.style.backgroundColor = prog.FSD.color;
  FSW.style.backgroundColor = prog.FSD.color;
  UIX.style.backgroundColor = prog.FSD.color;
});
UIX.addEventListener("click", function () {
  abv.textContent = prog.UIX.abv;
  nabv.textContent = prog.UIX.title;
  prog_desc.textContent = prog.UIX.text;
  UIX.style.color = prog.UIX.color;
  confirmed.style.color = prog.UIX.color;
  prog_window.style.backgroundColor = prog.UIX.color;
  program_img.style.backgroundImage = `url(${prog.UIX.image})`;
  next.textContent = "next bootcamp date |";
  UIX.style.backgroundColor = "#363738";
  FSD.style.backgroundColor = prog.UIX.color;
  FSW.style.backgroundColor = prog.UIX.color;
  FSC.style.backgroundColor = prog.UIX.color;
});


const Testimonials=
{
  zakaria:{name:"Zakaria T.",
state:"> SEF alumnus working at Celsia",
text:"Looking back, I cannot believe that only a year ago, I knew almost nothing about programming, and now I am a professional software engineer working remotely for a startup located in Norway. The boot camp was a life-changing experience for me.",
image:"assets/testimonials-zakaria.png"},
  zeina:{name:"Zeina O.",
state:"> SEF alumna working at Poyesis",
text:"Growing up, I saw that every girl that had taken interest in anything technical or scientific had been undermined and underestimated in her field. That isn't fair, breaking this stereotype is a must. The first step I took towards doing this was to join SEF, a bootcamp that supported diversity and inclusion.",
image:"assets/testimonials-zeina.png"},
  rabih:{name:"Rabih Chaar",
state:"> UAE, Nadeera",
text:"Our business is expanding thanks to talented and dedicated team members that we hired through SE Factory. Looking forward to hiring more developers from them as we grow.",
image:"assets/testimonials-rabih.jpeg"},
  rayan:{name:"Rayan Najdi",
state:"> Lebanon, Geek Express",
text:"Hiring skilled engineers has never been easy. With SE Factory, this became super easy and effective. Candidates are well-trained and we get to see their strengths before hiring, which is perfect for a growing startup.",
image:"assets/rayan.jpeg"}
}

const text6p=document.getElementById("sec6-text");
const sec6pimage=document.getElementById("sec6-pimage");
const sec6pname=document.getElementById("sec6-pname");
const sec6paddress=document.getElementById("sec6-paddress");
const sec6pimageiv =document.getElementById("sec6-pimage-div")
const sec6pagination=document.getElementById("sec6_pagination")

  
sec6pagination.addEventListener('click', function(e){
  let a= e.target.getAttribute("pname");
  let selectedTestimonial = Testimonials[a];
  console.log(Testimonials[a]);
  text6p.textContent=Testimonials[a].text;
  sec6pname.textContent=Testimonials[a].name;
  sec6paddress.textContent=Testimonials[a].state;
  sec6pimage.style.src= selectedTestimonial.image ;
  sec6pimageiv.style.backgroundImage= `url(${selectedTestimonial.image})`;
})
