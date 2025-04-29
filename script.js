// const myName = "Saeed Adel";
// const h1 = document.querySelector(".heading-primary");


// h1.addEventListener("click", function (e) {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "orangered";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////////////
// Set Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////////////
// Make Mobile Nav Work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////
// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");


allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // scroll Back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

////////////////////////////////////////////
// Sticky
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
   
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },

  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-86px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
 

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

// Language translations
const translations = {
  en: {
    // Navigation
    "how": "How it works",
    "meals": "Meals",
    "testimonials": "Testimonials",
    "pricing": "Pricing",
    "try": "Try for free",

    // Hero Section
    "hero-title": "A healthy meal delivered to your door, every single day",
    "hero-description": "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.",
    "start-eating": "Start eating well",
    "learn-more": "Learn more",
    "delivered-text": "meals delivered last year!",

    // Featured Section
    "featured-in": "As featured in",

    // How it Works Section
    "how-it-works": "How it works",
    "daily-dose": "Your daily dose of health in 3 simple steps",
    "step-1-number": "01",
    "step-1-title": "Tell us what you like (and what not)",
    "step-1-text": "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
    "step-2-number": "02",
    "step-2-title": "Approve your weekly meal plan",
    "step-2-text": "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    "step-3-number": "03",
    "step-3-title": "Receive meals at convenient time",
    "step-3-text": "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",

    // Meals Section
    "meals-title": "Meals",
    "meals-subtitle": "Omnifood AI chooses from 5,000+ recipes",
    "meal-1-title": "Japanese Gyozas",
    "meal-2-title": "Avocado Salad",
    "diet-title": "Works with any diet:",
    "calories": "calories",
    "nutriscore": "NutriScore ®",
    "rating": "rating",
    "tag-vegetarian": "Vegetarian",
    "tag-vegan": "Vegan",
    "tag-paleo": "Paleo",
    "all-recipes": "See all recipes",

    // Diet List
    "diet-1": "Vegetarian",
    "diet-2": "Vegan",
    "diet-3": "Pescatarian",
    "diet-4": "Gluten-free",
    "diet-5": "Lactose-free",
    "diet-6": "Keto",
    "diet-7": "Paleo",
    "diet-8": "Low FODMAP",
    "diet-9": "Kid-friendly",

    // Testimonials Section
    "testimonials-title": "Once you try it, you can't go back",
    "testimonial-1-text": "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    "testimonial-2-text": "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    "testimonial-3-text": "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    "testimonial-4-text": "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",

    // Pricing Section
    "pricing-title": "Pricing",
    "pricing-subtitle": "Eating well without breaking the bank",
    "starter": "Starter",
    "complete": "Complete",
    "per-month": "per month. That's just $13 per meal!",
    "per-month-complete": "per month. That's just $11 per meal!",
    "plan-details": "Prices include all applicable taxes. You can cancel at any time. Both plans include the following:",
    
    // Features
    "feature-1-title": "Never cook again!",
    "feature-1-text": "Our subscriptions cover 365 days per year, even including major holidays.",
    "feature-2-title": "Local and organic",
    "feature-2-text": "Our cooks only use local, fresh, and organic products to prepare your meals.",
    "feature-3-title": "No waste",
    "feature-3-text": "All our partners only use reusable containers to package all your meals.",
    "feature-4-title": "Pause anytime",
    "feature-4-text": "Going on vacation? Just pause your subscription, and we refund unused days.",

    // CTA Section
    "cta-title": "Get your first meal for free!",
    "cta-text": "Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!",
    "cta-form-name": "Full Name",
    "cta-form-email": "Email address",
    "cta-form-where": "Where did you hear from us?",
    "cta-form-select": "Please choose one option:",
    "cta-form-option-1": "Friends and family",
    "cta-form-option-2": "YouTube video",
    "cta-form-option-3": "Podcast",
    "cta-form-option-4": "Facebook ad",
    "cta-form-option-5": "Others",
    "cta-form-button": "Sign up now",

    // Footer
    "footer-contact": "Contact us",
    "footer-address": "623 Harrison St., 2nd Floor, San Francisco, CA 94107",
    "footer-account": "Account",
    "footer-create": "Create account",
    "footer-sign-in": "Sign in",
    "footer-ios": "iOS app",
    "footer-android": "Android app",
    "footer-company": "Company",
    "footer-about": "About Omnifood",
    "footer-business": "For Business",
    "footer-cooking": "Cooking partners",
    "footer-careers": "Careers",
    "footer-resources": "Resources",
    "footer-directory": "Recipe directory",
    "footer-help": "Help center",
    "footer-privacy": "Privacy & terms"
  },
  ar: {
    // Navigation
    "how": "كيف تعمل",
    "meals": "الوجبات",
    "testimonials": "التوصيات",
    "pricing": "الأسعار",
    "try": "جرب مجاناً",

    // Hero Section
    "hero-title": "وجبة صحية تصل إلى باب منزلك كل يوم",
    "hero-description": "اشتراك طعام ذكي على مدار 365 يومًا في السنة سيجعلك تأكل بشكل صحي مرة أخرى. مصممة حسب ذوقك واحتياجاتك الغذائية.",
    "start-eating": "ابدأ الأكل الصحي",
    "learn-more": "اعرف المزيد",
    "delivered-text": "وجبة تم توصيلها العام الماضي!",

    // Featured Section
    "featured-in": "كما ظهر في",

    // How it Works Section
    "how-it-works": "كيف تعمل",
    "daily-dose": "جرعتك اليومية من الصحة في 3 خطوات بسيطة",
    "step-1-number": "01",
    "step-1-title": "أخبرنا ما تحب (وما لا تحب)",
    "step-1-text": "لن تضيع وقتك مرة أخرى في التفكير فيما ستأكله! سيقوم Omnifood AI بإنشاء خطة وجبات أسبوعية مخصصة 100% لك. يضمن حصولك على جميع العناصر الغذائية والفيتامينات التي تحتاجها، بغض النظر عن النظام الغذائي الذي تتبعه!",
    "step-2-number": "02",
    "step-2-title": "وافق على خطة وجباتك الأسبوعية",
    "step-2-text": "مرة واحدة في الأسبوع، وافق على خطة الوجبات التي تم إنشاؤها لك بواسطة Omnifood AI. يمكنك تغيير المكونات، تبديل الوجبات بالكامل، أو حتى إضافة وصفاتك الخاصة.",
    "step-3-number": "03",
    "step-3-title": "استلم وجباتك في الوقت المناسب",
    "step-3-text": "سيقوم أفضل الطهاة في المدينة بطهي وجبتك المختارة كل يوم، وسنقوم بتوصيلها إلى باب منزلك في الوقت الذي يناسبك. يمكنك تغيير جدول التسليم والعنوان يومياً!",

    // Meals Section
    "meals-title": "الوجبات",
    "meals-subtitle": "يختار Omnifood AI من بين أكثر من 5,000 وصفة",
    "meal-1-title": "جيوزا ياباني",
    "meal-2-title": "سلطة الأفوكادو",
    "diet-title": "يعمل مع أي نظام غذائي:",
    "calories": "سعرة حرارية",
    "nutriscore": "التقييم الغذائي ®",
    "rating": "تقييم",
    "tag-vegetarian": "نباتي",
    "tag-vegan": "نباتي صرف",
    "tag-paleo": "بايليو",
    "all-recipes": "شاهد جميع الوصفات",

    // Diet List
    "diet-1": "نباتي",
    "diet-2": "نباتي صرف",
    "diet-3": "سمكي",
    "diet-4": "خالي من الغلوتين",
    "diet-5": "خالي من اللاكتوز",
    "diet-6": "كيتو",
    "diet-7": "بايليو",
    "diet-8": "قليل FODMAP",
    "diet-9": "مناسب للأطفال",

    // Testimonials Section
    "testimonials-title": "بمجرد أن تجربه، لا يمكنك العودة",
    "testimonial-1-text": "وجبات غير مكلفة وصحية ولذيذة، دون الحاجة إلى الطلب يدويًا! يبدو الأمر سحريًا حقًا.",
    "testimonial-2-text": "خوارزمية الذكاء الاصطناعي رائعة جداً، تختار الوجبات المناسبة لي في كل مرة. من الرائع عدم القلق بشأن الطعام بعد الآن!",
    "testimonial-3-text": "Omnifood منقذ للحياة! لقد بدأت شركة للتو، لذا لا يوجد وقت للطبخ. لا يمكنني العيش بدون وجباتي اليومية الآن!",
    "testimonial-4-text": "حصلت على Omnifood للعائلة بأكملها، ويوفر الكثير من الوقت! بالإضافة إلى أن كل شيء عضوي ونباتي وبدون بلاستيك.",

    // Pricing Section
    "pricing-title": "الأسعار",
    "pricing-subtitle": "تناول طعام صحي دون كسر البنك",
    "starter": "المبتدئ",
    "complete": "الكامل",
    "per-month": "شهرياً. هذا يعني 13$ فقط للوجبة!",
    "per-month-complete": "شهرياً. هذا يعني 11$ فقط للوجبة!",
    "plan-details": "الأسعار تشمل جميع الضرائب المطبقة. يمكنك الإلغاء في أي وقت. كلا الخطتين تشمل ما يلي:",

    // Features
    "feature-1-title": "لا تطبخ مرة أخرى!",
    "feature-1-text": "اشتراكاتنا تغطي 365 يومًا في السنة، حتى في العطل الرئيسية.",
    "feature-2-title": "محلي وعضوي",
    "feature-2-text": "يستخدم طهاتنا فقط المنتجات المحلية والطازجة والعضوية لتحضير وجباتك.",
    "feature-3-title": "صفر نفايات",
    "feature-3-text": "جميع شركائنا يستخدمون فقط حاويات قابلة لإعادة الاستخدام لتعبئة جميع وجباتك.",
    "feature-4-title": "إيقاف مؤقت في أي وقت",
    "feature-4-text": "ذاهب في عطلة؟ فقط أوقف اشتراكك مؤقتًا، وسنرد لك قيمة الأيام غير المستخدمة.",

    // CTA Section
    "cta-title": "احصل على وجبتك الأولى مجاناً!",
    "cta-text": "وجبات صحية ولذيذة وخالية من المتاعب في انتظارك. ابدأ في تناول الطعام الصحي اليوم. يمكنك الإلغاء أو الإيقاف المؤقت في أي وقت. والوجبة الأولى علينا!",
    "cta-form-name": "الاسم الكامل",
    "cta-form-email": "البريد الإلكتروني",
    "cta-form-where": "كيف سمعت عنا؟",
    "cta-form-select": "يرجى اختيار خيار:",
    "cta-form-option-1": "الأصدقاء والعائلة",
    "cta-form-option-2": "فيديو يوتيوب",
    "cta-form-option-3": "بودكاست",
    "cta-form-option-4": "إعلان فيسبوك",
    "cta-form-option-5": "أخرى",
    "cta-form-button": "اشترك الآن",

    // Footer
    "footer-contact": "اتصل بنا",
    "footer-address": "شارع الستين، الطابق الثالث، صنعاء، اليمن",
    "footer-account": "الحساب",
    "footer-create": "إنشاء حساب",
    "footer-sign-in": "تسجيل الدخول",
    "footer-ios": "تطبيق iOS",
    "footer-android": "تطبيق Android",
    "footer-company": "الشركة",
    "footer-about": "عن Omnifood",
    "footer-business": "للأعمال",
    "footer-cooking": "شركاء الطبخ",
    "footer-careers": "الوظائف",
    "footer-resources": "الموارد",
    "footer-directory": "دليل الوصفات",
    "footer-help": "مركز المساعدة",
    "footer-privacy": "الخصوصية والشروط"
  }
};

// Language switcher
document.addEventListener('DOMContentLoaded', function() {
  const langOptions = document.querySelectorAll('.lang-option');
  
  // Set initial state (English as default)
  langOptions[0].classList.add('active');
  
  async function updateContent(lang) {
    // Elements to animate
    const elementsToAnimate = [
      '.heading-primary',
      '.hero-description',
      '.btn--full',
      '.btn--outline',
      '.delivered-text',
      '.heading-featured-in',
      'h2.heading-secondary',
      '.subheading',
      'a.main-nav-link',
      '.step-number',
      '.heading-tertiary',
      '.step-description',
      '.meal-title',
      '.meal-attribute span',
      '.diet .heading-tertiary',
      '.list-item span',
      '.testimonial-text',
      '.plan-name',
      '.plan-text',
      '.plan-details',
      '.feature-title',
      '.feature-text',
      '.cta-text',
      'label',
      'option',
      '.btn--form',
      '.footer-heading',
      '.footer-link',
      '.address'
    ];

    // Fade out all elements
    elementsToAnimate.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (el && el.classList) {
          el.classList.add('fade-out');
        }
      });
    });

    // Wait for fade out
    await new Promise(resolve => setTimeout(resolve, 300));

    // Update navigation items
    const navUpdates = {
      'a[href="#how"]': translations[lang]["how"],
      'a[href="#meals"]': translations[lang]["meals"],
      'a[href="#testimonials"]': translations[lang]["testimonials"],
      'a[href="#pricing"]': translations[lang]["pricing"],
      '.nav-cta': translations[lang]["try"]
    };

    // Update all text content
    const contentUpdates = {
      // Hero Section
      '.heading-primary': translations[lang]["hero-title"],
      '.hero-description': translations[lang]["hero-description"],
      '.btn--full': translations[lang]["start-eating"],
      '.btn--outline': translations[lang]["learn-more"],
      '.delivered-text': translations[lang]["delivered-text"],
      '.heading-featured-in': translations[lang]["featured-in"],

      // How it Works Section
      '#how .subheading': translations[lang]["how-it-works"],
      '#how .heading-secondary': translations[lang]["daily-dose"],

      // Meals Section
      '#meals .subheading': translations[lang]["meals-title"],
      '#meals .heading-secondary': translations[lang]["meals-subtitle"],

      // Testimonials Section
      '#testimonials .subheading': translations[lang]["testimonials-title"],
      '#testimonials .heading-secondary': translations[lang]["testimonials-title"],

      // Pricing Section
      '#pricing .subheading': translations[lang]["pricing-title"],
      '#pricing .heading-secondary': translations[lang]["pricing-subtitle"],

      // CTA Section
      '.cta .heading-secondary': translations[lang]["cta-title"],
      '.cta-text': translations[lang]["cta-text"],

      // Other existing updates...
      '.step-number': (el, i) => translations[lang][`step-${i+1}-number`],
      '.heading-tertiary': (el, i) => {
        if (el.closest('.step-text-box')) {
          return translations[lang][`step-${i+1}-title`];
        }
        return el.textContent;
      },
      '.step-description': (el, i) => translations[lang][`step-${i+1}-text`],
      '.meal-title': (el, i) => translations[lang][`meal-${i+1}-title`],
      '.tag--vegetarian': translations[lang]["tag-vegetarian"],
      '.tag--vegan': translations[lang]["tag-vegan"],
      '.tag--paleo': translations[lang]["tag-paleo"],
      '.meal-attribute span': (el, i) => {
        const type = el.closest('.meal-attribute').querySelector('.meal-icon').getAttribute('name');
        if (type.includes('flame')) return translations[lang]["calories"];
        if (type.includes('restaurant')) return translations[lang]["nutriscore"];
        if (type.includes('star')) return translations[lang]["rating"];
      },
      '.diets .heading-tertiary': translations[lang]["diet-title"],
      '.list-item span': (el, i) => translations[lang][`diet-${i+1}`],
      '.pricing-plan--starter .plan-name': translations[lang]["starter"],
      '.pricing-plan--complete .plan-name': translations[lang]["complete"],
      '.pricing-plan--starter .plan-text': translations[lang]["per-month"],
      '.pricing-plan--complete .plan-text': translations[lang]["per-month-complete"],
      '.plan-details': translations[lang]["plan-details"],
      '.feature-title': (el, i) => translations[lang][`feature-${i+1}-title`],
      '.feature-text': (el, i) => translations[lang][`feature-${i+1}-text`],
      'label[for="full-name"]': translations[lang]["cta-form-name"],
      'label[for="email"]': translations[lang]["cta-form-email"],
      'label[for="select-where"]': translations[lang]["cta-form-where"],
      '.btn--form': translations[lang]["cta-form-button"],
      '.footer-heading': (el, i) => {
        const section = el.closest('div').className;
        if (section.includes('address')) return translations[lang]["footer-contact"];
        if (section.includes('nav-col')) {
          const headings = ['footer-account', 'footer-company', 'footer-resources'];
          return translations[lang][headings[i-1]];
        }
      },
      '.address': translations[lang]["footer-address"],
      '.footer-link': (el) => {
        const text = el.textContent.toLowerCase();
        const key = `footer-${text.replace(/\s+/g, '-')}`;
        return translations[lang][key] || el.textContent;
      }
    };

    // Apply all updates
    Object.entries(navUpdates).forEach(([selector, text]) => {
      const element = document.querySelector(selector);
      if (element) element.textContent = text;
    });

    Object.entries(contentUpdates).forEach(([selector, textOrFn]) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, index) => {
        if (el) {
          const text = typeof textOrFn === 'function' ? textOrFn(el, index) : textOrFn;
          if (text) el.textContent = text;
        }
      });
    });

    // Update form select options
    const selectWhere = document.querySelector('#select-where');
    if (selectWhere) {
      const options = selectWhere.options;
      options[0].text = translations[lang]["cta-form-select"];
      options[1].text = translations[lang]["cta-form-option-1"];
      options[2].text = translations[lang]["cta-form-option-2"];
      options[3].text = translations[lang]["cta-form-option-3"];
      options[4].text = translations[lang]["cta-form-option-4"];
      options[5].text = translations[lang]["cta-form-option-5"];
    }

    // Update RTL/LTR
    const mainContent = document.querySelector('main');
    const footer = document.querySelector('.footer');

    if (lang === 'ar') {
      if (mainContent) {
        mainContent.dir = 'rtl';
        mainContent.style.fontFamily = 'Cairo, sans-serif';
      }
      if (footer) {
        footer.dir = 'rtl';
        footer.style.fontFamily = 'Cairo, sans-serif';
      }
    } else {
      if (mainContent) {
        mainContent.dir = 'ltr';
        mainContent.style.fontFamily = 'Rubik, sans-serif';
      }
      if (footer) {
        footer.dir = 'ltr';
        footer.style.fontFamily = 'Rubik, sans-serif';
      }
    }

    // Small delay before fade in
    await new Promise(resolve => setTimeout(resolve, 50));

    // Fade in all elements
    elementsToAnimate.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (el && el.classList) {
          el.classList.remove('fade-out');
        }
      });
    });
  }

  langOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      // Only switch if clicking on inactive option
      if (!this.classList.contains('active')) {
        // Remove active class from all options
        langOptions.forEach(opt => opt.classList.remove('active'));
        // Add active class to clicked option
        this.classList.add('active');
        
        // Get the selected language and update content
        const lang = this.getAttribute('data-lang');
        updateContent(lang).catch(console.error); // Add error handling
        
      }
    });
  });
});
