import React, { useState } from "react";
import clsx from "clsx";
// icon list
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Landing.module.scss";

import avatar from "../../assest/img/avatar.png";

import logo from "../../assest/img/logo.png";

import ItemWidget from "./ItemWidget";

const data = [
  {
    name: "Артем Иванов",
    email: "artem@gmail.com",
    permissions: ["Блог", "Аналитика"],
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Лена Новикова",
    email: "lenkan@gmail.com",
    permissions: ["Администратор"],
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "Максим Иванов",
    email: "maksiim@gmail.com",
    permissions: ["Акции", "Модерация объявлений", "Тех. поддержка"],
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
  },
  {
    name: "Айжулдыз Кошкинбай",
    email: "aizhzk@gmail.com",
    permissions: ["Обращение клиентов"],
    image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg",
  },
];

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.Landing}>
      <div className={clsx(styles.Navbar, { [styles.opened]: menuOpen })}>
        <div className={styles.logo}>
          {" "}
          <img src={logo} />{" "}
        </div>
        <div className={styles.back}>
          <div className={styles.menu} onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={avatar} />
          <div className={styles.caption}>
            <div>
              {" "}
              <b>Артем Иванов</b>{" "}
            </div>
            <div> Собственник </div>
          </div>
        </div>
        <div className={styles.navbtn}>
          <DonutSmallIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Аналитика </div>
        </div>
        <div className={styles.navbtn}>
          <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Профиль </div>
        </div>
        <div className={styles.navbtn}>
          <AssignmentOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> валют </div>
        </div>
        <div className={styles.navbtn}>
          <ChatOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Модерация </div>
        </div>
        <div className={styles.navbtn}>
          <FilterOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Чаты </div>
        </div>
        <div className={styles.navbtn}>
          <GroupsOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Баннеры </div>
        </div>
        <div className={styles.navbtn}>
          <ListAltOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Команда </div>
        </div>
        <div className={styles.navbtn}>
          <PaidOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Профиль </div>
        </div>
        <div className={styles.navbtn}>
          <GroupsOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Курс валют </div>
        </div>
        <div className={styles.navbtn}>
          <LogoutOutlinedIcon sx={{ fontSize: 30 }} />
          <div className={styles.caption}> Выйти </div>
        </div>
      </div>
      <div className={styles.Board}>
        <div className={styles.scratch}>
          <div className={styles.panel}>
            <div className={styles.header}>
              <div className={styles.name}>
                <div className={styles.menu} onClick={toggleMenu}>
                  <MenuIcon />
                </div>
                Команда
              </div>
              <div className={styles.controller}>
                <div className={styles.searchBar}>
                  <input className={styles.searchInput} placeholder="Поиск по Email" />
                  <SearchIcon />
                </div>
                <div className={styles.btn}> Добавить пользователя </div>
              </div>
            </div>

            <div className={styles.mainboard}>
              {data.map((item, idx) => (
                <ItemWidget
                  current={true}
                  src={item.image}
                  name={item.name}
                  email={item.email}
                  tags={item.permissions}
                ></ItemWidget>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
