# Run Build

```
git clone https://github.com/wvary/nwjs-firewall-test.git
npm run build
```

I wasn't able to make the build work correct if there is a node_modules directly in this repo. So **don't run** `npm install`.

After the build, you can run the app using this command:
```
open build/nwjs-firewall-test/osx64/nwjs-firewall-test.app
```

You should see the firewall prompt as shown below:
![](images/firewall-prompt.png)