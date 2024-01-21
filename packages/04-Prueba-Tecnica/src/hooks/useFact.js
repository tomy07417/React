import { useState, useEffect } from "react";

const URL_API_FACTS = "https://catfact.ninja/fact"

export const useFact = () => {
    const [fact, setFact] = useState(false)
  
    const refreshFact = () => {
      fetch(URL_API_FACTS)
        .then(response => response.json())
        .then(data => setFact(data.fact))
    }
  
    useEffect(refreshFact, [])
  
    return [fact, refreshFact]
  }