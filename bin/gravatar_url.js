const { argv } = require('process');

const genHash = async (email) => {
    try {
        const { createHash } = await import('crypto');
        const hmac = createHash('md5')
        hmac.update(String(email).trim().toLowerCase())
        return hmac.digest('hex').toString()

    } catch (e){
        console.error("Could not generate hash.")
        process.exit(1)
    }
}

const main = async () => {
    const args = argv.slice(2)
    if(args.length === 0) throw new Error("Email address not provided!")
    const email = args[0]
    const hash = await genHash(email)
    console.log(`
        Gravatar url for ${email} is:
        https://www.gravatar.com/avatar/${hash}
        `)
}

main()
