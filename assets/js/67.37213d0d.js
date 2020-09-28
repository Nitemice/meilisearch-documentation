(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{437:function(a,t,e){"use strict";e.r(t);var r=e(8),o=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"how-to-deploy-a-meilisearch-instance-on-digitalocean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-deploy-a-meilisearch-instance-on-digitalocean"}},[a._v("#")]),a._v(" How to deploy a MeiliSearch instance on DigitalOcean")]),a._v(" "),e("h2",{attrs:{id:"create-an-out-of-the-box-meilisearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-an-out-of-the-box-meilisearch"}},[a._v("#")]),a._v(" Create an out-of-the-box MeiliSearch")]),a._v(" "),e("h3",{attrs:{id:"_1-create-a-new-droplet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-new-droplet"}},[a._v("#")]),a._v(' 1. Create a new "droplet"')]),a._v(" "),e("p",[a._v('A "droplet" is a set of resources, as a Virtual Machine, or a Server, in which you can run your own applications.'),e("br"),a._v('\nIn any DigitalOcean page, when you are logged in, you will find a menu in the upper-right corner. Click on "Create" -> "Droplets".')]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Create droplet","data-src":"/digitalocean/01.create.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_2-select-meilisearch-snapshot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-select-meilisearch-snapshot"}},[a._v("#")]),a._v(" 2. Select MeiliSearch snapshot")]),a._v(" "),e("p",[a._v('By default, DigitalOcean will display the "distributions" tab. Select the "Marketplace" tab and search for "meili". Select it.')]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Marketplace","data-src":"/digitalocean/02.marketplace.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_3-select-your-plan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-select-your-plan"}},[a._v("#")]),a._v(" 3. Select your plan")]),a._v(" "),e("p",[a._v('Select your plan. Plans start at $5 (click on "See all plans" for more options). Memory-optimized options will give you better results for a production environment on big datasets.')]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Select plan","data-src":"/digitalocean/03.select-plan.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_4-select-a-region-for-your-droplet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-select-a-region-for-your-droplet"}},[a._v("#")]),a._v(" 4. Select a region for your droplet")]),a._v(" "),e("p",[a._v("Select the region where you want to deploy your droplet. Remember, the closer you are to your users or customers, the better will be their search experience with MeiliSearch.")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Select region","data-src":"/digitalocean/04.select-region.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_5-add-your-ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-add-your-ssh-key"}},[a._v("#")]),a._v(" 5. Add your ssh key")]),a._v(" "),e("p",[a._v("Select your SSH key in order to be able to connect to your droplet later. If you don't see your SSH key add yours to your account.")]),a._v(" "),e("p",[a._v("If you need help with this, visit "),e("a",{attrs:{href:"https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/to-account/",target:"_blank",rel:"noopener noreferrer"}},[a._v("this link"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("You can also set a password for "),e("code",[a._v("root")]),a._v(" user if you prefer this authentication method.")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Add ssh key","data-src":"/digitalocean/05.add-ssh-key.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_6-choose-your-droplet-name-and-tags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-choose-your-droplet-name-and-tags"}},[a._v("#")]),a._v(" 6. Choose your droplet name and tags")]),a._v(" "),e("p",[a._v("Here you can select the name that will be visible everywhere in your DigitalOcean account. Choose wisely!")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Droplet name","data-src":"/digitalocean/06.droplet-name.png",loading:"lazy"}})]),a._v(" "),e("p",[a._v("Tags are a very good method to know who created resources, and for organizing resources or projects. Try to always add some tags to make clear what are the server purposes.")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Add tags","data-src":"/digitalocean/06.add-tags.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_7-finally-click-on-create-droplet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-finally-click-on-create-droplet"}},[a._v("#")]),a._v(" 7. Finally click on Create Droplet")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Create droplet","data-src":"/digitalocean/07.create-droplet.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_8-your-meilisearch-is-running-with-no-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-your-meilisearch-is-running-with-no-config"}},[a._v("#")]),a._v(" 8. Your MeiliSearch is running (with no config)")]),a._v(" "),e("p",[a._v("Instance creation in progress...")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Creating","data-src":"/digitalocean/08.creating.png",loading:"lazy"}})]),a._v(" "),e("p",[a._v("... done!")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Created","data-src":"/digitalocean/08.created-ip.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_9-test-meilisearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-test-meilisearch"}},[a._v("#")]),a._v(" 9. Test MeiliSearch.")]),a._v(" "),e("p",[a._v("Copy the public IP address:")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Copy IP","data-src":"/digitalocean/09.copy-ip.png",loading:"lazy"}})]),a._v(" "),e("p",[a._v("Paste it in your browser. If this screen is shown, your MeiliSearch is now ready!")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Test MeiliSearch","data-src":"/digitalocean/09.test-meili.png",loading:"lazy"}})]),a._v(" "),e("h2",{attrs:{id:"configure-production-settings-in-your-meilisearch-droplet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-production-settings-in-your-meilisearch-droplet"}},[a._v("#")]),a._v(" Configure production settings in your MeiliSearch Droplet")]),a._v(" "),e("p",[a._v("Configuring your MeiliSearch from a DigitalOcean droplet is very straightforward. Establish an SSH connection with your droplet and a script will guide you through the process.")]),a._v(" "),e("h3",{attrs:{id:"_1-make-your-domain-name-point-to-your-droplet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-make-your-domain-name-point-to-your-droplet"}},[a._v("#")]),a._v(" 1. Make your domain name point to your droplet")]),a._v(" "),e("p",[a._v("If you want to use your own domain name (or sub-domain), add "),e("code",[a._v("A record")]),a._v(" in your domain name provider account.")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Domain to  MeiliSearch","data-src":"/digitalocean/11.domain-a-record.png",loading:"lazy"}})]),a._v(" "),e("p",[a._v("This should work out of the box. Your domain should be usable for your MeiliSearch.")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Domain to  MeiliSearch","data-src":"/digitalocean/11.working-domain.png",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"_2-set-api-key-and-ssl-https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-api-key-and-ssl-https"}},[a._v("#")]),a._v(" 2. Set API KEY and SSL (HTTPS)")]),a._v(" "),e("p",[a._v("Meilisearch is running with a development configuration. It means that you haven't set up an API KEY (anyone can read/write from your MeiliSearch) and you aren't using HTTPS yet. But no worries, the configuration process is automated and very simple. Just connect via SSH to your new MeiliSearch Droplet and answer a few questions:")]),a._v(" "),e("h3",{attrs:{id:"_2-1-run-the-configuration-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-run-the-configuration-script"}},[a._v("#")]),a._v(" 2.1. Run the configuration script")]),a._v(" "),e("p",[a._v("Open a terminal and start a new SSH connection with the IP you got from DigitalOcean.")]),a._v(" "),e("p",[a._v("Write in your terminal "),e("code",[a._v("ssh root@<your-ip-address>")]),a._v(" and press Enter to establish connection:")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Terminal ssh","data-src":"/digitalocean/12.open-terminal-ssh.png",loading:"lazy"}})]),a._v(" "),e("p",[a._v("Write "),e("code",[a._v("yes")]),a._v(" and press Enter to accept the authentication process.")]),a._v(" "),e("p",[a._v("A script will run automatically, asking for your settings and desired configuration. If you want to run this script again later, you can do so by typing:")]),a._v(" "),e("p",[e("code",[a._v("sh /var/opt/meilisearch/scripts/first-login/000-set-meili-env.sh")])]),a._v(" "),e("h3",{attrs:{id:"_3-enjoy-your-ready-to-use-meilisearch-droplet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-enjoy-your-ready-to-use-meilisearch-droplet"}},[a._v("#")]),a._v(" 3. Enjoy your ready-to-use MeiliSearch droplet")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"Enjoy","data-src":"/digitalocean/13.finish.png",loading:"lazy"}})]),a._v(" "),e("p",[e("strong",[a._v("Enjoy")]),a._v("!")])])}),[],!1,null,null,null);t.default=o.exports}}]);