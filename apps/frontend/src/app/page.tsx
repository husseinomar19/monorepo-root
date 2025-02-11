"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  // Gebruik null als initiële waarde, niet een lege array []

  interface User {
    name: string;
    email: string;
    age: number;
  }
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/test");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.users);
      } catch (error) {
        console.error("There was an error!", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welkom bij Next.js + Laravel!</h1>
      { loading ? ( <p>loading..</p>) :
      ( 
        <ul>
          {data.map((user, index) => (
            <li key={index}>
              <p>Naam: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Leeftijd: {user.age}</p>
            </li>
          ))}
        </ul>
      ) }
      
    </div>
  );
}
