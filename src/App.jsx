import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import CourseList from './components/courseList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div>
      <h1 className="title">{data.title}</h1>
      <CourseList courses = {data.courses} />
    </div>


  );
}

const queryClient = new QueryClient();





const App = () => {
  const [count, setCount] = useState(0);

  return (
      <QueryClientProvider client = {queryClient}>
        <div className='container'>
          <Main/>
        </div>
      </QueryClientProvider>
    );
};

export default App;
