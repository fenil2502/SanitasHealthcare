import Head from 'next/head'
import React from 'react'

export default function SetMetaData(props) {
    return (
        <Head>

            {props.title ? <title>{props.title}</title> : null }
            <meta name="title" content={props.metaTitle} />
            <meta name="description" content={props.description} />
            <meta name="keyword" content={props.keyword} />
        </Head>
    )
}
