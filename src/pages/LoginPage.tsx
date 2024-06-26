import useAuth from '@/services/mutation/useAuth';
import { ChangeEvent, FormEvent, useState } from 'react';
import { SHA512 } from 'crypto-js';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    login({
      email: formData.email,
      password: SHA512(formData.password).toString(),
    });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={changeForm}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={changeForm}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
