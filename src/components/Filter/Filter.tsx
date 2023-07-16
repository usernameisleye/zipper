import { useState } from "react"
import { FilterProps } from "../../types"
import { Listbox } from "@headlessui/react"
import { FiChevronDown } from "react-icons/fi"

const Filter = ({ title, options, filter } : FilterProps) => {
  const [selected, setSelected] = useState(options[0])
  
  
  return (
    <div className="filter">
        <Listbox
            value={selected}
            onChange={e => setSelected(e)}
        >
            <div className="wrapper">
                <Listbox.Button className="wrapper_select-btn">
                    <span className="title">{selected.key}</span>

                    <FiChevronDown />
                </Listbox.Button>

                <Listbox.Options className="wrapper_options">
                    {options.map(option => (
                        <Listbox.Option
                            value={option}
                            key={option.key}
                            className={({ active }) => `option ${active && "active-option"}`}
                        >
                            {({ selected }) => (
                                <span className={`${selected && "selected-option"}`}>
                                    {option.key}
                                </span>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    </div>
  )
}

export default Filter