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
  
  <div className='py-10 content-center'>
  <div className="flex">
    <input
      type="radio"
      name="hs-default-radio"
      value="Individual"
      checked={selectedOption === 'Individual'}
      onChange={handleOptionChange}
      // Add your existing input attributes here
    />
    <label
      htmlFor="hs-default-radio"
      className="text-sm text-gray-500 ml-2 dark:text-gray-400"
    >
      Individual
    </label>
  </div>

  <div className="flex">
    <input
      type="radio"
      name="hs-default-radio"
      value="Institute"
      checked={selectedOption === 'Institute'}
      onChange={handleOptionChange}
      // Add your existing input attributes here
    />
    <label
      htmlFor="hs-checked-radio"
      className="text-sm text-gray-500 ml-2 dark:text-gray-400"
    >
      Institute
    </label>
  </div>

  <div className="flex">
    <input
      type="radio"
      name="hs-default-radio"
      value="Ngo"
      checked={selectedOption === 'Ngo'}
      onChange={handleOptionChange}
      // Add your existing input attributes here
    />
    <label
      htmlFor="hs-default-radio"
      className="text-sm text-gray-500 ml-2 dark:text-gray-400"
    >
      Ngo
    </label>
  </div>

  <div className="flex">
    <input
      type="radio"
      name="hs-default-radio"
      value="Enterprise"
      checked={selectedOption === 'Enterprise'}
      onChange={handleOptionChange}
      // Add your existing input attributes here
    />
    <label
      htmlFor="hs-default-radio"
      className="text-sm text-gray-500 ml-2 dark:text-gray-400"
    >
      Enterprise
    </label>
  </div>
  </div>


  <Button
    type="button"
    onClick={handleFormSubmit}
  >
    Submit
  </Button>
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
  
  