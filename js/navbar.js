const pathName = window.location.pathname;
let splittedPath = pathName.split("/");
const currentPage = splittedPath[splittedPath.length - 1].replace(".html", "");

const navCode = `<nav class="flex z-50 drop-shadow-lg lg:drop-shadow-none flex-row fixed top-0 lg:relative w-full p-8 lg:p-0 bg-[#f6f6ff] lg:bg-transparent lg:mb-4 items-center h-14 justify-between lg:px-[7.5%] xl:px-[10%] lg:mt-7 md:h-[4.75rem]">
    <a href="/"><img class="h-11 md:h-[4.75rem] lg:w-auto lg:hover:cursor-pointer" src="../assets/shared/nosk_sfd.svg"
            alt="Logo for NOSK-SFD"></a>
    <div id="nav-list"
        class="h-screen z-50 p-8 lg:p-0 transition-all shadow-lg bg-[#f6f6ff] lg:shadow-none lg:bg-transparent fixed w-[60vw] lg:w-auto flex flex-col list-none gap-5 top-14 md:top-[4.75rem] lg:top-0 -right-full lg:static lg:flex lg:flex-row xl:gap-10 lg:gap-8 lg:my-auto md:text-xl lg:font-semibold lg:items-center lg:*:hover:cursor-pointer font-bahnschrift lg:h-[4.75rem]">
        <span class="group/about" id="about">
            <div
                class="lg:hover:bg-transparent lg:border-0 flex items-center justify-between w-full md:w-auto">About
                <svg id="about-drop" class="w-4 h-4 ml-1 lg:group-active/about:-rotate-180 lg:group-hover/about:-rotate-180 transition-all" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <!-- Dropdown menu -->
            <div id="about-menu"
                class="hidden lg:absolute *:text-black lg:group-hover/about:block lg:bg-white text-base z-50 list-none divide-y divide-gray-100 lg:rounded lg:shadow w-full lg:w-44 font-normal">
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <span onclick="${currentPage == "" ? "scrollNav('about-sfd-section')" : "jumpToPage('about-sfd-section')"}" class="lg:text-sm hover:cursor-pointer hover:bg-gray-100 block px-8 lg:px-4 py-2">About
                            SFD</span>
                    </li>
                    <li>
                        <span onclick="${currentPage == "" ? "scrollNav('about-nosk-section')" : "jumpToPage('about-nosk-section')"}"
                            class="lg:text-sm hover:bg-gray-100 block px-8 lg:px-4 py-2 hover:cursor-pointer">About NOSK</span>
                    </li>
                    <li>
                        <a href="/pages/gallery.html" class="lg:text-sm hover:bg-gray-100 block px-8 lg:px-4 py-2">Gallery</a>
                    </li>
                    <li>
                        <a href="#" class="lg:text-sm hover:bg-gray-100 block px-8 lg:px-4 py-2">Speakers</a>
                    </li>
                    <li>
                        <a href="/pages/sponsors.html" class="lg:text-sm hover:bg-gray-100 block px-8 lg:px-4 py-2">Sponsors</a>
                    <!-- <span onclick="${currentPage == "" ? "scrollNav('sponsors-section')" : "jumpToPage('sponsors-section')"}" class="lg:text-sm hover:cursor-pointer hover:bg-gray-100 block px-8 lg:px-4 py-2">Sponsors</span> -->
                    </li>
                </ul>
            </div>
        </span>
        <span id="schedule_page" class="lg:hover:border-b-2"><a href="/pages/schedule.html">Schedule</a></span>
        <span id="team" class="lg:hover:border-b-2"><a href="/pages/ourteam.html">Our Team</a></span>
        <span class="group/activities" id="activities">
            <!-- This was named "Activities" before, thus the id and classes. -->
            <div
                class="lg:hover:bg-transparent lg:border-0 flex items-center justify-between w-full md:w-auto">Register
                <svg id="activities-drop" class="w-4 h-4 ml-1 lg:group-hover/activities:-rotate-180 transition-all" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <!-- Dropdown menu -->
            <div id="activities-menu"
                class="hidden lg:absolute *:text-black lg:group-hover/activities:block lg:bg-white text-base z-50 list-none divide-y divide-gray-100 lg:rounded lg:shadow w-full lg:w-44 font-normal">
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a target="_blank" href="https://forms.gle/ZmT2eDPqyLoLj5Sd6"
                            class="lg:text-sm hover:bg-gray-100 block px-8 lg:px-4 py-2">Open Source Project Exhibition 
                        <img src="/assets/navbar/externalLink.svg" class="inline object-contain w-4 h-4" alt="">
                        </a>
                        
                    </li>
                    <li>
                        <a target="_blank" href="https://forms.gle/ahaZGnoJhXT5jU3q8" class="lg:text-sm hover:bg-gray-100 block px-8 lg:px-4 py-2">NOSKODE 5.0
                            <img src="/assets/navbar/externalLink.svg" class="inline object-contain w-4 h-4" alt="">
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://forms.gle/Yvt6B7EGniR47ukB9" class="lg:text-sm hover:bg-gray-100 block px-8 lg:px-4 py-2">Capture The Flag
                            <img src="/assets/navbar/externalLink.svg" class="inline object-contain w-4 h-4" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </span>
        <span id="faqs" class="lg:hover:border-b-2"><a href="/pages/faqs.html">FAQs</a></span>
        <span id="contact" class="lg:hover:border-b-2"><a href="mailto:nosk@ncit.edu.np" target="_blank">Contact Us</a></span>
    </div>
    <img id="hamMenu" src="/assets/navbar/hamMenu.svg" class="lg:hidden h-8 md:h-14 hover:cursor-pointer"></img>
</nav>
<div class="h-14 md:h-[4.75rem] lg:h-0">‎</div>
`;

const scrollNav = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const jumpToPage = (id) => {
  let origin = document.location.origin;
  document.location.replace(origin + `#${id}`);
};

document.addEventListener("DOMContentLoaded", () => {
  //To Insert the Navbar in the page
  const body = document.querySelector("#body").innerHTML;
  document.querySelector("#body").innerHTML = navCode + body;

  //For Hamburger menu
  const hamMenu = document.getElementById("hamMenu");
  const navList = document.getElementById("nav-list");
  hamMenu.addEventListener("click", () => {
    let srcNow = hamMenu.getAttribute("src");
    if (srcNow == "/assets/navbar/hamMenu.svg") {
      hamMenu.setAttribute("src", "/assets/navbar/closeMenu.svg");
    } else {
      hamMenu.setAttribute("src", "/assets/navbar/hamMenu.svg");
    }
    navList.classList.toggle("right-0");
    navList.classList.toggle("-right-full");
  });

  //For Hamburger Menu bhitra ko
  const aboutButton = document.getElementById("about");
  const aboutMenu = document.getElementById("about-menu");
  const aboutDrop = document.getElementById("about-drop");
  const activitiesButton = document.getElementById("activities");
  const activitiesMenu = document.getElementById("activities-menu");
  const activitiesDrop = document.getElementById("activities-drop");
  aboutButton.addEventListener("click", () => {
    aboutMenu.classList.toggle("hidden");
    aboutDrop.classList.toggle("-rotate-180");
  });
  activitiesButton.addEventListener("click", () => {
    activitiesMenu.classList.toggle("hidden");
    activitiesDrop.classList.toggle("-rotate-180");
  });

  //For NavItem highlighting
  const navChildren = document.querySelector("#nav-list").children;
  for (navChild of navChildren) {
    if (currentPage == "") return;
    if (
      currentPage.includes(navChild.id) ||
      navChild.id.includes(currentPage)
    ) {
      navChild.style = "color: #E4554E";
    }
  }
});
