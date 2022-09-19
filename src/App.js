import React from 'react'
import './App.css';
import Posts from './components/Posts';
import Footer from './components/Footer';
import axios from "axios"
import { useState,useEffect } from 'react';

export default function App() {
  const [entries, setEntries] = useState([]);
  const [article,setArticle] =useState([])
  useEffect(() => {
    axios
      .get(
        `./data.json`
      )
      .then((response) => {
        setEntries(response.data.items);
        setArticle(response.data.items )
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
    return (
      <div className="App">
        <div className='container'>
          <header>
            <div className='wrapper'>
              <div className='wrapper_inner'>
              <span className='wrapper_span'>Cookbook</span>

              </div>
            </div>
          </header>
          <main>
            <div className='wrapper'>
              <Posts posts={entries} articls={article}/>
            </div>
            
          </main>
          <footer>
            <div className="footer"><Footer /></div>
          </footer>
        </div>
      </div>
    );
  }


