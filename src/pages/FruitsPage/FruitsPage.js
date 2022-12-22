/*
Create
Read (Index & Show)
Update
Destroy
*/
import { useState, useEffect } from 'react'


export default function FruitsPage (props){
    const [fruits, setFruits] = useState([])
    const [foundFruit, setFoundFruit] = useState(null)
    const [newFruit, setNewFruit] = useState({
        name: '',
        readyToEat: false,
        color: ''
    })
    // index
    const getFruits = async () => {
        try {
            const response = await fetch('/api/fruits')
            const data = await response.json()
            setFruits(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteFruit = async (id) => {
        try {
            const response = await fetch(`/api/fruits/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundFruit(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateFruit = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/fruits/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundFruit(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
        // delete
        const createFruit = async (id) => {
            try {
                const response = await fetch(`/api/fruits`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...newFruit})
                })
                const data = await response.json()
                setFoundFruit(data)
            } catch (error) {
                console.error(error)
            }
        }

}