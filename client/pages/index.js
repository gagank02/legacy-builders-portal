import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
      <>
        <div className='home-content'>
          <h2>Content</h2>
        </div>

        <div className='home-lessons'>
            <h2>Lessons</h2>
            <ul>
              <li>Communication</li>
              <li>Financial Literacy</li>
              <li>Conflict resolution</li>
              <li>Leadership</li>
              <li>Project Management</li>
              <li>Emotional Intelligence</li>
            </ul>
          </div>

          <div className='home-progress'>
            <span>70%</span>
          </div>
      </>
  )
}
