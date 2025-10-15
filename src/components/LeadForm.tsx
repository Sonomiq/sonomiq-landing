'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface LeadFormProps {
  action: string
}

const platforms = [
  'ADP',
  'UKG (Kronos + Ultimate)',
  'Workday',
  'Dayforce (Ceridian)',
  'Deputy',
  'When I Work',
  'QGenda',
  'Other'
]

const roles = [
  'Sonographer',
  'Lead Sonographer',
  'Department Manager',
  'HR/Workforce Management',
  'IT/Technical Lead',
  'Other'
]

export function LeadForm({ action }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    platform: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required'
    }
    
    if (!formData.role) {
      newErrors.role = 'Please select your role'
    }
    
    if (!formData.platform) {
      newErrors.platform = 'Please select your platform'
    }
    
    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you would send this to your API
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-light text-gray-900 mb-4">
          Thank you for your interest!
        </h3>
        <p className="text-gray-600 mb-6">
          We'll be in touch soon with updates about SONOMIQ and your platform integration.
        </p>
        <Badge variant="default" className="text-sm">
          Early Access Request Submitted
        </Badge>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg ${
              errors.name ? 'border-red-300' : 'border-slate-200 hover:border-slate-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg ${
              errors.email ? 'border-red-300' : 'border-slate-200 hover:border-slate-300'
            }`}
            placeholder="your.email@organization.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-3">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg ${
              errors.organization ? 'border-red-300' : 'border-slate-200 hover:border-slate-300'
            }`}
            placeholder="Your healthcare organization"
          />
          {errors.organization && <p className="mt-1 text-sm text-red-600">{errors.organization}</p>}
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-3">
            Role *
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg ${
              errors.role ? 'border-red-300' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <option value="">Select your role</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
          {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="platform" className="block text-sm font-medium text-slate-700 mb-3">
          Current Scheduling Platform *
        </label>
        <select
          id="platform"
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg ${
            errors.platform ? 'border-red-300' : 'border-slate-200 hover:border-slate-300'
          }`}
        >
          <option value="">Select your platform</option>
          {platforms.map(platform => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
        </select>
        {errors.platform && <p className="mt-1 text-sm text-red-600">{errors.platform}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-6 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg hover:border-slate-300"
          placeholder="Tell us about your scheduling challenges or specific needs..."
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className={`mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded ${
            errors.consent ? 'border-red-300' : ''
          }`}
        />
        <label htmlFor="consent" className="ml-3 text-sm text-slate-700 leading-relaxed">
          I agree to be contacted about SONOMIQ updates and early access opportunities. *
        </label>
      </div>
      {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSubmitting ? 'Submitting...' : 'Request Early Access'}
      </Button>
    </motion.form>
  )
}
