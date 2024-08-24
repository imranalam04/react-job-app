import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Jobspage from "./pages/Jobspage";
import Notfound from "./pages/Notfound";
import Jobpage, { jobLoader } from "./pages/Jobpage";
import Addjobpage from "./pages/Addjobpage";
import MainLayout from "./layouts/MainLayout";
import Editjobpage from "./pages/Editjobpage";

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<Jobspage />} />
        <Route path='/add-job' element={<Addjobpage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<Editjobpage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'
          element={<Jobpage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path='*' element={<Notfound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;




