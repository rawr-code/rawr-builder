import { FiChevronDown } from 'react-icons/fi'

interface AccordionProps {
    title: string
    children?: React.ReactNode
}

function Accordion({ children, title }: AccordionProps) {
    return (
        <details className="group" open>
            <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 px-6 py-4">
                <span className="text-sm font-semibold capitalize">
                    {title}
                </span>
                <FiChevronDown className="h-5 w-5 rotate-90 stroke-current text-gray-400 transition-transform group-open:rotate-0" />
            </summary>
            <div className="border-b border-gray-200 px-6 py-4">{children}</div>
        </details>
    )
}

export default Accordion
