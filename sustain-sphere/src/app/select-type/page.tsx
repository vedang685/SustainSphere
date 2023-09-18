'use client'

import React, { useState } from 'react';
// import { useSession } from 'next-auth/react';
import IndividualForm from '../components/ui/forms/IndividualForm';
import EnterpriseForm from '../components/ui/forms/EnterpriseForm';
import InstituteForm from '../components/ui/forms/InstitueForm';
import NgoForm from '../components/ui/forms/NgoForm';
import { Button } from '../components/ui/button';

export default function MyFormPage() {
    // const { data: session} = useSession();
    const [selectedOption, setSelectedOption] = useState<'Individual' | 'Institute' | 'Ngo' | 'Enterprise' | null>(null);
    const [formVisible, setFormVisible] = useState(false);
  
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!formVisible) {
        setSelectedOption(e.target.value as 'Individual' | 'Institute' | 'Ngo' | 'Enterprise');
      }
    };
  
    const handleFormSubmit = () => {
        //todo: add the logic to save the user type to the database
      setFormVisible(true);
    };
    // const user = session?.user;
    return (
      <div>
    { !formVisible && (
        <div className='text-center py-8'>
         <h1 className="text-black text-5xl">Select Your Type</h1>
  
         <div className="py-20 flex justify-center items-center space-x-16">
  <div className="flex items-center text-gray-500 hover:text-gray-400">
    <input
      type="radio"
      name="hs-default-radio"
      value="Individual"
      checked={selectedOption === 'Individual'}
      onChange={handleOptionChange}
    />
    <label
      htmlFor="hs-default-radio"
      className="text-xl pl-2"
    >
      Individual
    </label>
  </div>

  <div className="flex items-center text-gray-500 hover:text-gray-400">
    <input
      type="radio"
      name="hs-default-radio"
      value="Institute"
      checked={selectedOption === 'Institute'}
      onChange={handleOptionChange}
    />
    <label
      htmlFor="hs-default-radio"
      className="text-xl pl-2"
    >
      Institute
    </label>
  </div>

  <div className="flex items-center text-gray-500 hover:text-gray-400">
    <input
      type="radio"
      name="hs-default-radio"
      value="Ngo"
      checked={selectedOption === 'Ngo'}
      onChange={handleOptionChange}
    />
    <label
      htmlFor="hs-default-radio"
      className="text-xl pl-2"
    >
      Ngo
    </label>
  </div>

  <div className="flex items-center text-gray-500 hover:text-gray-400">
    <input
      type="radio"
      name="hs-default-radio"
      value="Enterprise"
      checked={selectedOption === 'Enterprise'}
      onChange={handleOptionChange}
    />
    <label
      htmlFor="hs-default-radio"
      className="text-xl pl-2"
    >
      Enterprise
    </label>
  </div>
</div>



  <div className='py-10'>
  <Button
    type="button"
    onClick={handleFormSubmit}
  >
    Submit
  </Button>
  </div>
        </div>
        )}
  
        {formVisible && selectedOption !== null && (
          <div>
            {selectedOption === 'Individual' && <IndividualForm />}
            {selectedOption === 'Enterprise' && <EnterpriseForm />}
            {selectedOption === 'Institute' && <InstituteForm />}
            {selectedOption === 'Ngo' && <NgoForm />}
          </div>
        )}
      </div>
    );
  }
  
  