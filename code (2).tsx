import React, { useState } from 'react';

const GoSpainAgency = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'ar' | 'es' | 'en'>('ar');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  // Language content - in a real app, this would be in separate files
  const content = {
    ar: {
      header: {
        home: "الرئيسية",
        services: "خدماتنا",
        info: "معلومات عملية",
        faq: "الأسئلة الشائعة",
        contact: "اتصل بنا"
      },
      hero: {
        title: "Go Spain Agency",
        subtitle: "هي وكالتك الموثوقة لمرافقتك في رحلتك الدراسية إلى إسبانيا. من القبول الجامعي حتى الوصول، نحن معك خطوة بخطوة.",
        cta: "احجز استشارتك المجانية اليوم"
      },
      services: {
        title: "خدمات الوكالة",
        immigration: {
          title: "خدمات الهجرة للدراسة",
          shortVisa: "التأشيرة القصيرة: لدورات لغة قصيرة أو تكوينات.",
          longVisa: "تأشيرة الدراسة الطويلة: للطلاب الجامعيين أو الدراسات العليا.",
          residence: "تصريح الإقامة للطلاب: كيفية الحصول عليه وتجديده بعد الوصول."
        },
        complementary: {
          title: "خدمات تكميلية",
          university: "المساعدة في اختيار الجامعات والتسجيل.",
          tax: "استشارات ضريبية للطلاب.",
          bank: "المساعدة في فتح حساب بنكي بإسبانيا.",
          postArrival: "استشارات ما بعد الوصول (الإقامة، النقل، التأقلم الثقافي)."
        }
      },
      practicalInfo: {
        title: "معلومات عملية وموثوقة",
        guide: {
          title: "دليل إجراءات الهجرة",
          steps: [
            "قبول جامعي",
            "تحضير ملف التأشيرة",
            "إيداع الطلب",
            "الحصول على الفيزا",
            "السفر",
            "تصريح الإقامة"
          ]
        },
        requirements: {
          title: "متطلبات التأشيرة",
          items: [
            "قبول جامعي",
            "إثبات الموارد المالية",
            "تأمين صحي",
            "جواز سفر صالح",
            "صور بيومترية"
          ]
        }
      },
      faq: {
        title: "الأسئلة الشائعة",
        questions: [
          {
            question: "هل يمكنني العمل أثناء الدراسة؟",
            answer: "نعم، يمكن للطلاب الدوليين العمل بدوام جزئي أثناء الدراسة في إسبانيا، بحد أقصى 20 ساعة في الأسبوع."
          },
          {
            question: "ما هي تكاليف المعيشة في إسبانيا؟",
            answer: "تختلف التكاليف حسب المدينة، ولكن في المتوسط تحتاج بين 900-1200 يورو شهريًا لتغطية السكن والطعام والمواصلات."
          },
          {
            question: "هل يمكن إحضار العائلة؟",
            answer: "نعم، يمكن للطلاب الذين يدرسون برامج طويلة الأمد التقدم بطلب لم شمل العائلة بعد الحصول على الإقامة."
          }
        ]
      },
      contact: {
        title: "اتصل بنا",
        form: {
          name: "الاسم الكامل",
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف",
          inquiry: "نوع الاستفسار",
          message: "رسالة",
          submit: "إرسال"
        },
        info: {
          email: "gospainagency@gmail.com",
          phone: "+212 775-552759 / +212 614-864373"
        }
      },
      testimonials: {
        title: "شهادات العملاء",
        items: [
          {
            text: "ساعدتني Go Spain Agency في الحصول على تأشيرة الدراسة بكل سهولة. محترفون جدًا!",
            author: "أحمد، طالب في برشلونة"
          },
          {
            text: "استشارات ما بعد الوصول كانت لا تقدر بثمن. ساعدوني في إيجاد سكن وفتح حساب بنكي.",
            author: "سارة، طالبة في مدريد"
          }
        ]
      },
      footer: {
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
        contact: "اتصل بنا"
      }
    },
    es: {
      header: {
        home: "Inicio",
        services: "Servicios",
        info: "Información Práctica",
        faq: "Preguntas Frecuentes",
        contact: "Contacto"
      },
      hero: {
        title: "Go Spain Agency",
        subtitle: "Su agencia confiable para acompañarle en su viaje de estudios a España. Desde la admisión universitaria hasta la llegada, estamos con usted paso a paso.",
        cta: "Reserve su consulta gratuita hoy"
      },
      // Other Spanish translations would continue here...
    },
    en: {
      header: {
        home: "Home",
        services: "Services",
        info: "Practical Info",
        faq: "FAQ",
        contact: "Contact"
      },
      hero: {
        title: "Go Spain Agency",
        subtitle: "Your trusted agency to accompany you on your study journey to Spain. From university admission to arrival, we're with you every step of the way.",
        cta: "Book your free consultation today"
      },
      // Other English translations would continue here...
    }
  };

  const currentContent = content[currentLanguage];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('تم إرسال استفسارك بنجاح! سوف نتصل بك قريباً.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="https://placeholder-image-service.onrender.com/image/150x50?prompt=Go%20Spain%20Agency%20logo%20with%20Spanish%20flag%20colors%20red%20and%20yellow&id=logo-1" 
                alt="Go Spain Agency Logo" 
                className="h-10"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary font-medium">
                {currentContent.header.home}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary font-medium">
                {currentContent.header.services}
              </button>
              <button onClick={() => scrollToSection('info')} className="text-foreground hover:text-primary font-medium">
                {currentContent.header.info}
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary font-medium">
                {currentContent.header.faq}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary font-medium">
                {currentContent.header.contact}
              </button>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button 
                onClick={() => setCurrentLanguage('ar')}
                className={`px-2 py-1 rounded ${currentLanguage === 'ar' ? 'bg-primary text-white' : 'bg-muted'}`}
              >
                AR
              </button>
              <button 
                onClick={() => setCurrentLanguage('es')}
                className={`px-2 py-1 rounded ${currentLanguage === 'es' ? 'bg-primary text-white' : 'bg-muted'}`}
              >
                ES
              </button>
              <button 
                onClick={() => setCurrentLanguage('en')}
                className={`px-2 py-1 rounded ${currentLanguage === 'en' ? 'bg-primary text-white' : 'bg-muted'}`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-foreground hover:text-primary">
                {currentContent.header.home}
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-foreground hover:text-primary">
                {currentContent.header.services}
              </button>
              <button onClick={() => scrollToSection('info')} className="block w-full text-left py-2 text-foreground hover:text-primary">
                {currentContent.header.info}
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-foreground hover:text-primary">
                {currentContent.header.faq}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-foreground hover:text-primary">
                {currentContent.header.contact}
              </button>
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-r from-red-600 to-yellow-400 py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentContent.hero.title}</h1>
              <p className="text-xl text-white mb-8">{currentContent.hero.subtitle}</p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {currentContent.hero.cta}
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 opacity-20">
            <img 
              src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Soccer%20ball%20with%20Spanish%20flag%20design&id=hero-football" 
              alt="Decorative soccer ball with Spanish flag design" 
              className="w-48 h-32 object-contain"
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{currentContent.services.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Immigration Services */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary">{currentContent.services.immigration.title}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 rtl:ml-2 rtl:mr-0">✓</span>
                    <span>{currentContent.services.immigration.shortVisa}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 rtl:ml-2 rtl:mr-0">✓</span>
                    <span>{currentContent.services.immigration.longVisa}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 rtl:ml-2 rtl:mr-0">✓</span>
                    <span>{currentContent.services.immigration.residence}</span>
                  </li>
                </ul>
              </div>

              {/* Complementary Services */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary">{currentContent.services.complementary.title}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 rtl:ml-2 rtl:mr-0">✓</span>
                    <span>{currentContent.services.complementary.university}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 rtl:ml-2 rtl:mr-0">✓</span>
                    <span>{currentContent.services.complementary.tax}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 rtl:ml-2 rtl:mr-0">✓</span>
                    <span>{currentContent.services.complementary.bank}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 rtl:ml-2 rtl:mr-0">✓</span>
                    <span>{currentContent.services.complementary.postArrival}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Information Section */}
        <section id="info" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{currentContent.practicalInfo.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Immigration Guide */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">{currentContent.practicalInfo.guide.title}</h3>
                <div className="space-y-4">
                  {currentContent.practicalInfo.guide.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa Requirements */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">{currentContent.practicalInfo.requirements.title}</h3>
                <ul className="space-y-3">
                  {currentContent.practicalInfo.requirements.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-2 rtl:ml-2 rtl:mr-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{currentContent.faq.title}</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {currentContent.faq.questions.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{currentContent.testimonials.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {currentContent.testimonials.items.map((testimonial, index) => (
                <div key={index} className="bg-muted p-6 rounded-lg">
                  <p className="text-foreground italic mb-4">"{testimonial.text}"</p>
                  <p className="text-primary font-semibold">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-red-600 to-yellow-400">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">{currentContent.contact.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-foreground mb-2">{currentContent.contact.form.name}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-foreground mb-2">{currentContent.contact.form.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-foreground mb-2">{currentContent.contact.form.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-foreground mb-2">{currentContent.contact.form.inquiry}</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">{currentLanguage === 'ar' ? 'اختر نوع الاستفسار' : 'Select inquiry type'}</option>
                      <option value="study_visa">{currentLanguage === 'ar' ? 'تأشيرة دراسة' : 'Study Visa'}</option>
                      <option value="university">{currentLanguage === 'ar' ? 'قبول جامعي' : 'University Admission'}</option>
                      <option value="other">{currentLanguage === 'ar' ? 'استفسار آخر' : 'Other Inquiry'}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-foreground mb-2">{currentContent.contact.form.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    {currentContent.contact.form.submit}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-6">{currentLanguage === 'ar' ? 'معلومات التواصل' : 'Contact Information'}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 rtl:ml-4 rtl:mr-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{currentContent.contact.info.email}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 rtl:ml-4 rtl:mr-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{currentContent.contact.info.phone}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Spanish%20university%20campus%20with%20students&id=contact-image" 
                    alt="Spanish university campus with students studying" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://placeholder-image-service.onrender.com/image/120x40?prompt=Go%20Spain%20Agency%20logo%20white%20version&id=footer-logo" 
                alt="Go Spain Agency Logo" 
                className="h-10 mb-4"
              />
              <p className="text-gray-300">
                {currentLanguage === 'ar' 
                  ? 'وكالتك الموثوقة للدراسة في إسبانيا' 
                  : 'Your trusted agency for studying in Spain'}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{currentLanguage === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white">{currentContent.header.home}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white">{currentContent.header.services}</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white">{currentContent.header.faq}</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{currentLanguage === 'ar' ? 'معلومات' : 'Information'}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">{currentContent.footer.privacy}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">{currentContent.footer.terms}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">{currentContent.footer.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{currentLanguage === 'ar' ? 'تابعنا' : 'Follow Us'}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Go Spain Agency. {currentLanguage === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoSpainAgency;
