import React from "react";
import "./Profession.css";
import { motion } from "framer-motion";

const variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    backgroundColor: 'blue',
    transition: {
      duration: 2,
    },
  },
};
const Profession = () => {
  return (
    <div sx={{ display: "flex", flexDirction: "column", padding: "15px" }}>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        excepturi veritatis necessitatibus saepe. Molestiae soluta tenetur eaque
        est odio, minima accusantium optio eum veniam vero sunt distinctio
        veritatis recusandae neque delectus nisi. Eligendi, provident quasi!
        Fugit voluptatem unde omnis ex sequi blanditiis. Iure beatae suscipit
        iste similique inventore, optio magni.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis alias eius, explicabo officiis possimus amet officia reprehenderit sed cumque eaque minima, tempora delectus id corporis, temporibus nobis praesentium. Autem alias esse fuga? Maiores eius fuga beatae ea aliquam, iure consectetur, soluta quaerat magni commodi, tenetur blanditiis dignissimos! Dolorum quas illum aliquid ratione enim eum ipsum, velit quidem, nostrum ea veniam amet, quisquam facilis voluptatibus sapiente impedit eaque. Nemo tempora placeat quod magni laudantium magnam, illum cumque incidunt quis molestias eveniet harum dolores esse nihil dicta rerum iusto fugit accusamus. Laudantium eum quo ab enim quibusdam sunt dolor, nihil eos assumenda, voluptatem sapiente similique. Temporibus, fugit repudiandae eaque sunt ab sequi labore voluptatem illo optio facilis rerum quibusdam? Dolores error fugit blanditiis totam temporibus velit labore eos maiores, nostrum neque! Incidunt accusantium maiores repudiandae quas recusandae tenetur sed laboriosam voluptatibus impedit at, magnam maxime adipisci? Officiis velit sint qui placeat odio dolores officia, obcaecati vero reprehenderit, explicabo laboriosam labore ea, modi provident nam sequi! Debitis tempora optio hic, commodi nisi eum earum facilis sint. Eos eaque voluptates dicta voluptas odio necessitatibus! Quo, aut. Placeat tempore facere officia provident quidem officiis veniam odit quas ratione eos, modi reiciendis nisi, corporis labore quod. Hic rerum ab quasi saepe cumque itaque a accusantium provident libero voluptatum voluptate veniam quas velit, voluptas distinctio nam nulla deleniti consequuntur eius. Minima a accusantium at esse dolore dolores iure libero aspernatur, nisi nemo aliquid expedita laboriosam ex error eum. Ipsa deleniti beatae ullam. Reiciendis facere deleniti debitis ratione ipsum? Ea neque enim, eaque dicta iure dolore natus, perspiciatis illum consequuntur sint aliquid nam rerum asperiores quod saepe aut autem ipsa, dignissimos culpa et fuga deserunt aliquam obcaecati mollitia. Possimus dolor atque veniam consectetur, labore nostrum maiores quam sed laborum molestiae! Dignissimos rem earum voluptate minus cum nesciunt magnam nisi ipsam expedita ipsum accusantium sint consequuntur doloribus tenetur unde debitis, laborum mollitia inventore commodi soluta possimus. Accusantium quasi, rem quis reiciendis voluptatibus modi quos nulla non nesciunt totam aliquam natus libero eligendi illum aut soluta recusandae delectus similique repellendus nemo iste officiis vero. Itaque minima excepturi facere eveniet possimus saepe reiciendis aspernatur corporis mollitia unde exercitationem, vel distinctio voluptatibus ut, explicabo voluptas impedit. Laboriosam, cum. Optio facilis non eum voluptatum modi, iure obcaecati magni perspiciatis quis error harum distinctio nihil commodi rem omnis facere libero, tempora ipsam sunt quae temporibus. Quos, veniam sunt rem explicabo vel quis ratione eveniet officiis, expedita optio pariatur molestiae porro architecto adipisci odio quasi error, eius aliquid numquam dolor. Saepe cupiditate pariatur placeat. Dolorem ut quisquam placeat ea! Illum, praesentium ut, voluptates ab temporibus magnam explicabo odio eligendi laborum autem rerum earum impedit reprehenderit sint at ullam nulla? Laboriosam delectus perspiciatis enim maxime, natus necessitatibus ratione eum adipisci eligendi, veritatis fugiat fuga culpa, officiis ipsum fugit quibusdam! Fuga temporibus perspiciatis sint facere nobis et quam odit, nemo numquam, cumque debitis repellendus corrupti amet. Nemo, corporis nesciunt. Reiciendis corporis itaque aliquid accusantium consequatur dolorem, dignissimos ipsum, cum perspiciatis fugiat enim nam ex? Esse, nobis fugiat!
      </div>
      <motion.div variants={variants} initial="initial" whileInView="animate">
        Devang Donda Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, asperiores recusandae eos velit quae maxime atque nihil.
        Asperiores, consequuntur vitae!
      </motion.div>
    </div>
  );
};

export default Profession;
