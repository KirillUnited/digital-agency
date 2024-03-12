import React from 'react'
import Icon1 from '@/assets/svg/benefit-1.svg'
import Icon2 from '@/assets/svg/benefit-2.svg'
import Icon3 from '@/assets/svg/benefit-3.svg'

export default function BenefitIcon({ icon }: { icon: string | undefined }) {
    return (
        <>
            {icon === "1" && <Icon1 className="w-8 h-8" />}
            {icon === "2" && <Icon2 className="w-8 h-8" />}
            {icon === "3" && <Icon3 className="w-8 h-8" />}
        </>
    )
}
