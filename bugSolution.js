```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Profile: {userId}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
```