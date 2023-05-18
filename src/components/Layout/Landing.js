import React, {useState} from 'react';
import clsx from 'clsx';
// icon list
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Landing.module.scss';

import avatar from '../../assest/img/avatar.png';
import avatar1 from '../../assest/img/avatar (1).png';
import avatar2 from '../../assest/img/avatar (2).png';
import avatar3 from '../../assest/img/avatar (3).png';
import avatar4 from '../../assest/img/avatar (4).png';

import logo from '../../assest/img/logo.png';

import ItemWidget from './ItemWidget';

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const tagData = [
    ['Модерация объявлений', 'Блог', 'Тех.поддержка', 'Обращения', 'Аналитика', 'Акции'],
    ['Модерация объявлений', 'Блог'],
    ['Обращения', 'Аналитика', 'Акции'],
    ['Блог', 'Тех.поддержка', 'Аналитика', 'Акции'],
    ['Модерация объявлений', 'Акции'],
  ];
  return (
    <div className={styles.Landing}>
      <div className={clsx(styles.Navbar, {[styles.opened]: menuOpen})}>
        <div className={styles.logo}> <img src={logo} /> </div>
        <div className={styles.back}>
          <div className={styles.menu} onClick={toggleMenu}><MenuIcon /></div>
        </div>
        <div className={styles.avatar}>
          <img src={avatar} />
          <div className={styles.caption}>
            <div> <b>Артем Иванов</b> </div>
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
          <PaidOutlinedIcon sx={{ fontSize: 30 }}  />
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
          <div className={styles.panel} >
            
            <div className={styles.header}>
              <div className={styles.name}>
                <div className={styles.menu} onClick={toggleMenu}><MenuIcon /></div>
                Команда
              </div>
              <div className={styles.controller}>
                <div className={styles.searchBar}>
                  <div>Поиск по Email</div>
                  <SearchIcon />
                </div>
                <div className={styles.btn}> Добавить пользователя </div>
              </div>
            </div>

            <div className={styles.mainboard}>
              <ItemWidget current={true} src={avatar1} name='Пользователь' email='example@email.com' tags={tagData[0]}></ItemWidget>
              <ItemWidget src={avatar} name='Артем Иванов' email='example@email.com' tags={tagData[1]}></ItemWidget>
              <ItemWidget src={avatar2} name='Артем Иванов' email='example@email.com' tags={tagData[2]}></ItemWidget>
              <ItemWidget src={avatar3} name='Артем Иванов' email='example@email.com' tags={tagData[3]}></ItemWidget>
              <ItemWidget src={avatar4} name='Артем Иванов' email='example@email.com' tags={tagData[4]}></ItemWidget>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;