import React, { useState, FormEvent, ReactElement, ReactNode } from "react";
import { db } from '@lib/firebase/app';
import { useRouter } from 'next/router';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from "@components/layout/main-layout";

import { collection, doc, query, setDoc, where } from "firebase/firestore";
import { useAuth } from "@lib/context/auth-context";

import { getAuth } from "firebase/auth";

interface Profile {
  first_name: string,
  last_name: string,
  email: string,
  mobile_number: string,
  how_did_you_hear_about_us: string,
  street_address: string,
  city: string,
  state: string,
  postal_code: string,
  do_you_have_access_to_a_car: boolean,
  commute_preferences: string,
  what_roles_are_you_looking_for: string,
  how_many_years_of_experience_do_you_have: number,
  what_is_your_desired_hourly_wage: number,
  tell_us_what_you_are_looking_for_role_type: string,
  when_would_you_like_to_start: string,
  where_would_you_be_willing_to_work: string,
  do_you_have_any_certifications_you_want_to_share: string,
  what_certifications_do_you_have: string,
  languages: string,
  createdBy: string
}

const initialProfile: Profile = {
  first_name: "",
  last_name: "",
  email: "",
  mobile_number: "",
  how_did_you_hear_about_us: "",
  street_address: "",
  city: "",
  state: "",
  postal_code: "",
  do_you_have_access_to_a_car: false,
  commute_preferences: "",
  what_roles_are_you_looking_for: "",
  how_many_years_of_experience_do_you_have: 0,
  what_is_your_desired_hourly_wage: 0,
  tell_us_what_you_are_looking_for_role_type: "",
  when_would_you_like_to_start: "",
  where_would_you_be_willing_to_work: "",
  do_you_have_any_certifications_you_want_to_share: "",
  what_certifications_do_you_have: "",
  languages: ""
};

export default function ProfileForm(): JSX.Element {

  const [profile, setProfile] = useState<Profile>(initialProfile);
//   const router = useRouter();
//   const userId = router.query.userId;

const auth = getAuth();
const authUser = auth.currentUser;
const userId = authUser?.uid as string;

// const userId = user?.id as string;
console.log('user', userId)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
      createdBy: userId
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    await setDoc(doc(db, `userProfiles/${userId}`), profile);



    /* 

    db.collection("user")
      .doc(String(userId))
      .set(profile)
      .then(() => {
        alert("Profile Saved");
        setProfile(initialProfile);
      })
      .catch((error) => {
        alert(error.message);
      }); */
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="first_name"
        value={profile.first_name}
        onChange={handleChange}
        placeholder="First Name"
        // continue from previous
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="last_name"
        value={profile.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="tel"
        name="mobile_number"
        value={profile.mobile_number}
        onChange={handleChange}
        placeholder="Mobile Number"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <textarea
        name="how_did_you_hear_about_us"
        value={profile.how_did_you_hear_about_us}
        onChange={handleChange}
        placeholder="How did you hear about us?"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="street_address"
        value={profile.street_address}
        onChange={handleChange}
        placeholder="Street Address"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="city"
        value={profile.city}
        onChange={handleChange}
        placeholder="City"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="state"
        value={profile.state}
        onChange={handleChange}
        placeholder="State"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="postal_code"
        value={profile.postal_code}
        onChange={handleChange}
        placeholder="Postal Code"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <label className="block w-full p-2 border border-gray-300 rounded-md">
        Do you have access to a car?
        <select 
          name="do_you_have_access_to_a_car"
          value={profile.do_you_have_access_to_a_car}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
      </label>

      <textarea
        name="commute_preferences"
        value={profile.commute_preferences}
        onChange={handleChange}
        placeholder="Commute Preferences"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="what_roles_are_you_looking_for"
        value={profile.what_roles_are_you_looking_for}
        onChange={handleChange}
        placeholder="What role(s) are you looking for?"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="number"
        name="how_many_years_of_experience_do_you_have"
        value={profile.how_many_years_of_experience_do_you_have}
        onChange={handleChange}
        placeholder="How many years of experience do you have?"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="number"
        name="what_is_your_desired_hourly_wage"
        value={profile.what_is_your_desired_hourly_wage}
        onChange={handleChange}
        placeholder="What is your desired hourly wage?"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="tell_us_what_you_are_looking_for_role_type"
        value={profile.tell_us_what_you_are_looking_for_role_type}
        onChange={handleChange}
        placeholder="Tell us what you're looking for (Role Type)"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="when_would_you_like_to_start"
        value={profile.when_would_you_like_to_start}
        onChange={handleChange}
        placeholder="When would you like to start?"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="where_would_you_be_willing_to_work"
        value={profile.where_would_you_be_willing_to_work}
        onChange={handleChange}
        placeholder="Where would you be willing to work?"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <textarea
        name="do_you_have_any_certifications_you_want_to_share"
        value={profile.do_you_have_any_certifications_you_want_to_share}
        onChange={handleChange}
        placeholder="Do you have any certification(s) you want to share?"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="what_certifications_do_you_have"
        value={profile.what_certifications_do_you_have}
        onChange={handleChange}
        placeholder="What certifications do you have?"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="languages"
        value={profile.languages}
        onChange={handleChange}
        placeholder="Languages"
        className="block w-full p-2 border border-gray-300 rounded-md"
      />

      <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded-md">
        Save
      </button>
    </form>
  );
};

ProfileForm.getLayout = (page: ReactElement): ReactNode => (
    <ProtectedLayout>
      <MainLayout>
        <HomeLayout>{page}</HomeLayout>
      </MainLayout>
    </ProtectedLayout>
  );