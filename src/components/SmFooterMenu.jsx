import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// const menu=[
//     {title:"About",items:["About Calendly","Contact Sales","Newsroom","Careers","Security"]},
//     {title:"Solutions",items:["Customer Success","Sales","Recruiting","Information Technology","Marketing"]},
//     {title:"Popular Features",items:["Embed Calendly","Automated Scheduling","Group Events","Customizable Notifications"]},
//     {title :"Support",items:["Help Center","Video Tutorials"]},
//     {title:"Add-Ons",items:["Download for Chrome","Download firefox"]},
//     {title:"Developers",items:["Developer Tools"]}
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SmFooterMenu({menu}) {
  const [selected, setSelected] = useState(menu[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
                  <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate font-semibold text-gray-500 ">{selected.option}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {menu.map((menuoption,index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-500',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={menuoption}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {menuoption.option}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default SmFooterMenu;