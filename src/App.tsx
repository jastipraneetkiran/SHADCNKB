import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Suspense } from 'react';

import './App.css'
import { DataTableDemo } from './dataTableDemo/DataTableDemo';
// import DemoPage from './payments/page'

function App() {

  return (<>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Suspense fallback={<div>Loading...</div>}>
        {/* <DemoPage />
         */}
         <DataTableDemo/>
    </Suspense>
  </>
)
}

export default App
