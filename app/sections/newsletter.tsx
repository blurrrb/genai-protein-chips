import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your API
    // For demo purposes, we'll just open the modal
    setIsModalOpen(true);
    setEmail('');
  };

  return (
    <>
      <section id="newsletter" className="bg-[#E63946] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Stay Updated</h2>
            <p className="mb-8">
              Subscribe to our newsletter for new product announcements, exclusive offers, and protein-packed recipes.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border-0 px-4 py-3 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#1D3557]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-[#1D3557] text-white hover:bg-[#152841]">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Custom Dialog without dark overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-transparent" 
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative z-50 m-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-semibold">Thanks for subscribing!</h3>
            </div>
            <div className="flex flex-col items-center py-6">
              <CheckCircle className="mb-4 h-16 w-16 text-[#2A9D8F]" />
              <p className="text-center text-lg text-gray-600">
                You've successfully subscribed to CrunchFuel newsletter. Get ready for protein-packed updates and exclusive offers!
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                className="bg-[#E63946] text-white hover:bg-[#c4303a]"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterSection;