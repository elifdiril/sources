import React from 'react';
import { useFormik } from 'formik';

import validationSchema from './validations';

function Form() {
  const { values, handleSubmit, handleChange, setFieldValue, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: '',
        surname: '',
        email: '',
        password: 'Abcd5fG-',
        passwordConfirm: '',
        theme: 'dark',
        country: 'turkey',
        gender: 'male',
        numbers: ['one'],
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
      // validateOnMount: true,
    });

  return (
    <div>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <div>
          <div className="inputs">
            <input
              placeholder="name"
              value={values.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && <div className="error">{errors.name}</div>}

            <input
              placeholder="surname"
              value={values.surname}
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.surname && touched.surname && <div className="error">{errors.surname}</div>}

            <input
              placeholder="email"
              value={values.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <div className="error">{errors.email}</div>}

            <input
              placeholder="password"
              value={values.password}
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <div className="error">{errors.password}</div>}

            <input
              placeholder="password confirmation"
              value={values.passwordConfirm}
              name="passwordConfirm"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <div className="error">{errors.passwordConfirm}</div>
            )}
          </div>

          <div className="theme">
            <button type="button" onClick={() => setFieldValue('theme', 'dark')}>
              Dark
            </button>
            <button type="button" onClick={() => setFieldValue('theme', 'light')}>
              Light
            </button>
          </div>

          <div>
            <select name="country" onChange={handleChange}>
              <option value="turkey">Turkey</option>
              <option value="usa">USA</option>
              <option value="gb">GB</option>
            </select>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value="male"
              checked={values.gender === 'male'}
            />{' '}
            Male
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value="female"
              checked={values.gender === 'female'}
            />{' '}
            Female
          </div>

          <div>
            <input
              name="numbers"
              type="checkbox"
              value="one"
              onChange={handleChange}
              checked={values.numbers.includes('one')}
            />{' '}
            One
            <input
              name="numbers"
              type="checkbox"
              value="two"
              onChange={handleChange}
              checked={values.numbers.includes('two')}
            />{' '}
            Two
            <input
              name="numbers"
              type="checkbox"
              value="three"
              onChange={handleChange}
              checked={values.numbers.includes('three')}
            />{' '}
            Three
          </div>

          <button type="submit">Submit</button>
          <h2>Values</h2>
          <pre>{JSON.stringify(values, null, 2)}</pre>

          <h2>Errors</h2>
          <pre>{JSON.stringify(errors, null, 2)}</pre>

          <h2>Touched</h2>
          <pre>{JSON.stringify(touched, null, 2)}</pre>
        </div>
      </form>
    </div>
  );
}

export default Form;
