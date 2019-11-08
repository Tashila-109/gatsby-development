import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>I currently am a full-stack developer.</p>
            <p>
                <Link to="/contact">want to work with me? reach out.</Link>
            </p>
        </Layout>
    )
}

export default AboutPage
