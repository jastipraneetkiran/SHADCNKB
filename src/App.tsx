import { lazy } from 'react';
import { Suspense } from 'react';
const DemoPage = lazy(() => import('./payments/page'))

import './App.css'
import { DataTableDemo } from './dataTableDemo/DataTableDemo';
// import DemoPage from './payments/page'

function App() {

  return (<>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <section className='min-w-96 flex flex-col justify-center items-center'>
  <Suspense fallback={<div>Loading...</div>}>
        <DemoPage />
         <DataTableDemo/>
    </Suspense>
  </section>
  </>
)
}

export default App
