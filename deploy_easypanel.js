const token = "453ae5c8cd2c3dd19faada056d5c058ce48da2bc650f363a0d651775d1c714ef";
const url = "https://easypanel.lucaseditor.com.br/api/trpc";

async function run() {
  try {
    console.log("Deploying service...");
    const deployRes = await fetch(`${url}/services.app.deployService`, {
       method: "POST",
       headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
       body: JSON.stringify({ json: { projectName: "painel-de-escala", serviceName: "site-dmconnect" } })
    });
    console.log("Deploy result:", await deployRes.text());

  } catch(e) {
    console.error("Error:", e);
  }
}
run();
