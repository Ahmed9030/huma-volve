import React from 'react'

export const EmptyState = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={icon} alt="Empty State" />
    </div>
  )
}

