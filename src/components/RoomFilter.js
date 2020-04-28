import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'
//get unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    //get unique types
    let types = getUnique(rooms, 'type')

    //add all
    types = ['all', ...types]

    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })



    return (
        <section className="filter-container">
            <Title title="search cars"></Title>
            <form action="" className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <lable htmlFor="type">drive type</lable>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/* select guest*/}
                <div className="form-group">
                    <lable htmlFor="capacity">capacity</lable>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* end select guest */}

                {/* room price */}
                <div className="form-group">
                    <lable htmlFor="price">car price ${price}</lable>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end room price */}



                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">all wheel drive</label>
                    </div>
                    
                </div>
                {/* end extras */}
            </form>
        </section>
    )
}
