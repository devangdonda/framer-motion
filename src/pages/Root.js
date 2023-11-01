import React from "react";
import { Outlet } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import Navbar from "../Navbar";

const Root = () => {
  return (
    <>
      <Navbar />  
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestias, animi, saepe molestiae corporis odit accusantium dolor qui illo provident blanditiis quo! Illum, aperiam. Dolor minus vel reprehenderit ex, incidunt cupiditate non esse, eveniet nihil aliquam id accusantium alias, reiciendis doloremque magnam impedit ullam praesentium eligendi laudantium? Est fugiat quaerat id soluta quibusdam, similique fugit architecto dolores corrupti quam adipisci, reiciendis tempore dolorem ducimus iusto aliquam natus pariatur veritatis aliquid tempora dolorum excepturi! Sapiente pariatur, sunt nostrum quae deleniti quaerat! Sequi odit eligendi itaque quod consequatur non, minus sint voluptatum fugit, architecto perspiciatis quo totam vitae expedita labore ullam, et laboriosam maiores magni magnam. Voluptatum sit, dicta harum at reprehenderit dolor officia ipsum praesentium aut ipsam, enim molestias minus quisquam, accusamus et magni vero fugiat iste omnis pariatur nulla. Iusto facere odit voluptatum qui ullam, sunt quod distinctio quasi consequatur, explicabo est, neque natus labore veniam corporis deserunt nesciunt laboriosam vitae repellendus atque! Illum, repellat quod. Harum ipsam distinctio labore mollitia molestias laboriosam, natus eos, magni, vitae quasi alias quod ratione id assumenda culpa ab tempora earum sequi recusandae? Enim, corrupti iure, doloribus dolores eaque adipisci consequuntur accusamus, itaque quaerat quia ratione provident veniam perspiciatis iste sunt fuga! Eius maxime aspernatur doloremque est consequatur commodi magni adipisci quidem eveniet facere nisi illo aperiam assumenda autem iste ratione excepturi omnis magnam dicta hic doloribus pariatur reiciendis, modi repellendus! Libero praesentium eligendi ea distinctio ducimus autem iure sit suscipit! Nihil et veritatis ab, perferendis quo nulla rerum eligendi consequatur atque laborum quas asperiores dolorem, saepe blanditiis nemo dignissimos numquam magnam in, quam assumenda nesciunt. Velit quia unde excepturi ipsam! Delectus est tempora esse, dignissimos ratione ea aspernatur in veniam maxime quis sequi voluptas autem perspiciatis dolor quisquam numquam dolores iure. Quae a assumenda fugiat recusandae numquam, repellendus aliquam eius libero soluta ipsa tempore possimus maiores ipsum facere veniam in ipsam. Architecto, aut rerum nihil veritatis perferendis debitis deleniti, ratione alias ab ea iusto, quo officia quae enim eaque hic quisquam laudantium ullam nam numquam perspiciatis officiis. Quidem perferendis omnis doloribus quasi, saepe reiciendis numquam nulla illo quam nemo quod placeat soluta tenetur minus culpa id debitis animi reprehenderit libero nesciunt! Nesciunt inventore qui officiis dignissimos ipsa assumenda vero odit similique dolorum. Praesentium porro natus quibusdam autem odio aspernatur! Voluptates quaerat nostrum voluptatem ratione! Ut maiores assumenda unde! Facere, obcaecati deserunt? Dolorum excepturi ipsum sint repellendus corporis pariatur magni unde delectus tempora! At doloribus sapiente quibusdam earum iure reprehenderit modi saepe distinctio veniam alias, itaque illum voluptas tempore facilis quisquam ullam asperiores possimus. Quos minus iusto autem repudiandae aliquid vitae molestiae quas doloremque totam ad. Illum libero aliquid inventore tempora eius facere, modi pariatur perspiciatis rerum error labore placeat vel itaque repellat molestias a, quo ex provident repudiandae saepe sapiente ratione, quod odio? Rem, veritatis? Quo sed perspiciatis saepe assumenda vel debitis ducimus nobis est, officia, impedit sunt suscipit quas, minima repellendus dicta? Totam excepturi consectetur omnis voluptate quibusdam distinctio magnam aut in rerum animi. Sint odio reiciendis laudantium, voluptate possimus eligendi aut.
      </Typography>
      <Box>
        <Typography>This is Root Page</Typography>
        <Button variant="contained">Click me</Button>
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
