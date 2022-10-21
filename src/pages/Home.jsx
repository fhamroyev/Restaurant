import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from 'axios'
import { FOODS } from "../utils/urls";
import Foods from "../components/Foods";

export default function Home() {
    const [foods, setFoods] = useState()
    const [arrow, setArrow] = useState({ 'display': 'none' })

    useEffect(() => {
        btnFood()
        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                setArrow({ 'display': 'block' })
            } else {
                setArrow({ 'display': 'none' })
            }
        })
    }, [])

    function redirect() {
        window.scrollTo(0, 0)
    }

    const btnFood = () => {
        axios
            .get(FOODS)
            .then((res) => {
                setFoods(res.data.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }
    return (
        <Layout btnFood={btnFood} setFoods={setFoods}>
            <button className="button btn-up" style={arrow} onClick={() => redirect()}>
                <ion-icon name="chevron-up-outline"></ion-icon>
            </button>
            {
                foods && foods.length > 0 ? (
                    <div>
                        <Foods foods={foods} />
                    </div>
                )
                    :
                    (
                        <div>
                            <h1 className="is-size-1 has-text-centered">Not found</h1>
                        </div>
                    )
            }
        </Layout>
    )
}