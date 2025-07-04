import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
// aos


const Portfolio = () => {
 const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: 299,
      annualPrice: 2390, // 20% discount
      features: [
        "Social Media Management (2 platforms)",
        "Basic SEO Optimization",
        "Monthly Analytics Report",
        "Email Marketing Setup",
        "Basic Website Audit",
        "5 Blog Posts/Month",
        "Community Support"
      ],
      notIncluded: [
        "PPC Advertising",
        "Advanced Analytics",
        "Custom Content Creation"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 599,
      annualPrice: 4792, // 20% discount
      features: [
        "Social Media Management (4 platforms)",
        "Advanced SEO Optimization",
        "Weekly Analytics Reports",
        "Email Marketing Campaigns",
        "Comprehensive Website Audit",
        "10 Blog Posts/Month",
        "PPC Advertising Management",
        "Content Strategy Development",
        "Priority Support"
      ],
      notIncluded: [
        "24/7 Dedicated Support",
        "Custom Integrations"
      ],
      popular: true,
      color: "border-[#8e1616]"
    },
    {
      name: "Enterprise",
      description: "For established businesses needing full-service marketing",
      monthlyPrice: 1299,
      annualPrice: 10392, // 20% discount
      features: [
        "Social Media Management (All platforms)",
        "Enterprise SEO Strategy",
        "Daily Analytics & Reporting",
        "Advanced Email Marketing Automation",
        "Complete Website Optimization",
        "20 Blog Posts/Month",
        "Full PPC Campaign Management",
        "Custom Content Creation",
        "Brand Strategy Development",
        "24/7 Dedicated Support",
        "Custom Integrations",
        "Quarterly Strategy Reviews"
      ],
      notIncluded: [],
      popular: false,
      color: "border-gray-200"
    }
  ];

  const PricingCard = ({ plan }) => (
    <div className={`relative bg-white rounded-lg shadow-lg border-2 ${plan.color} p-8 ${plan.popular ? 'transform scale-105' : ''}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#8e1616] text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">
            ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
          </span>
          <span className="text-gray-600 ml-2">/month</span>
          {isAnnual && (
            <div className="text-sm text-green-600 font-semibold mt-1">
              Save 20% annually
            </div>
          )}
        </div>
        
        <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
          plan.popular 
            ? 'bg-[#8e1616] text-white hover:bg-[#7a1414]' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}>
          Get Started
        </button>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
        
        {plan.notIncluded.length > 0 && (
          <>
            <h4 className="font-semibold text-gray-900 mb-4 mt-6">Not included:</h4>
            {plan.notIncluded.map((feature, index) => (
              <div key={index} className="flex items-start">
                <X className="text-gray-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500">{feature}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[#7A6960]">
            <h1 className="text-3xl font-semibold text-center">Prices</h1>
            <div className="flex justify-center items-center mt-2">
              <div className="h-1 w-16 rounded" style={{backgroundColor: '#8e1616'}}></div>
            </div>
            <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
          Choose the perfect plan to accelerate your business growth
            </p>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                !isAnnual 
                  ? 'bg-[#8e1616] text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                isAnnual 
                  ? 'bg-[#8e1616] text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I change my plan later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees! We'll get you started immediately after you choose your plan.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What if I'm not satisfied?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer custom packages?</h3>
              <p className="text-gray-600">Yes! Contact us to discuss custom solutions tailored to your specific business needs.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-600 mb-6">
            Start your digital marketing journey today with our expert team.
          </p>
          <button className="bg-[#8e1616] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a1414] transition-all duration-200">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
