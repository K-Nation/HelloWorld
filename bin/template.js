const { writeFile } = require('fs/promises')
const path = require('path')

const template = `<!-- template start -->
<li class="card">
    <div class="profile">

        <div class="profile-header {{ gradient_theme }}" >
            <!-- link your gravatar -->
            <div alt="{{ profile-name }}" class="profile-image bg-[url('{{ gravatar_url }}')]"> </div>
        </div>

        <!-- add your name -->
        <h5 class="profile-name">
            {{ profile-name }}
        </h5>

        <!-- say something about yourself -->
        <p class="profile-summary">
            {{ profile_summary }}
        </p>

        <div class="profile-links">
            <!-- link to your github profile -->
            <a href="{{ github_url }}" class="profile-link github">
                <i class="nf nf-fa-github"></i>
            </a>

            <a href="{{ linkedin_url }}" class="profile-link linkedin">
                <!-- link to your linkedin profile -->
                <i class="nf nf-fa-linkedin_square"></i>
            </a>

            <!-- link to your twitter profile -->
            <a href="{{ twitter_url }}" class="profile-link twitter">
                <i class="nf nf-fa-twitter"></i>
            </a>
        </div>
    </div>
</li>
<!-- template end -->
`
const writeTemplate = async ({ template }) => {
    const file  = path.format({
        dir: process.cwd(),
        base: 'profile-template.html'
    })
    await writeFile(file, template)
}

const main = async () => {
    try {
        await writeTemplate({ template })
        console.log("Template generated successfully.")
    } catch (e) {
        console.log("An error occurred.\n Please file an issue.")
    }
}

main()
