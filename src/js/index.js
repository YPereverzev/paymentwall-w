var rainbow = require('rainbow-code');
import '../scss/main.scss';

console.log('hi!');
const Initialize_TEXT = `import com.paymentwall.java.Base;

Base.setAppKey("YOUR_APPLICATION_KEY");
Base.setSecretKey("YOUR_SECRET_KEY");
Base.setApiType(Base.API_GOODS);
`;
var highlighted = rainbow.colorSync('// So meta\nrainbow.colorSync(\'var helloWorld = true;\');', 'javascript');
console.log(highlighted);

const testText = document.querySelector('.test');
