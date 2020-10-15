// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    let {
        query: {id}
    } = req;

    if (id.toLowerCase() === "discord") {
        return res.redirect("https://discord.mineflame.com/")
    }

    console.log("ID:", id);
    res.json({
        error: true,
        message: "Service not found :("
    })
}
