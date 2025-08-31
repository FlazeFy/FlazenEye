"use client"
import { useState } from "react"

const FilterYear = ({ onChange }) => {
    const now = new Date().getFullYear()
    const years = Array.from({ length: 5 }, (_, i) => now - i)

    const [selectedYear, setSelectedYear] = useState(now)

    const handleChange = (e) => {
        const value = e.target.value
        setSelectedYear(value)
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <div className="mb-2">
            <label htmlFor="yearFilter" className="form-label fw-bold">Filter Year</label>
            <select id="yearFilter" className="form-select" value={selectedYear} onChange={handleChange}>
                {
                    years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default FilterYear;
