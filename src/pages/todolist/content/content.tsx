import { useState } from 'react';
import S from './content.styles';
import { Bookmark } from './parts/bookmark/bookmark';
import { IncomingIcon } from './parts/icons/incoming-icon/incoming-icon';
import { TodayIcon } from './parts/icons/today-icon/today-icon';
import { TommorowIcon } from './parts/icons/tommorow-icon/tommorow-icon';
import { Tasks } from './parts/tasks/tasks';

export enum Mode {
  TODAY = 'Today',
  TOMORROW = 'Tomorrow',
  WEEK = 'Week',
}

export const Content = () => {
  const [mode, setMode] = useState(Mode.TODAY);

  return (
    <>
      <S.Menu>
        <Bookmark Icon={TodayIcon} onClick={() => setMode(Mode.TODAY)}>
          Dziś
        </Bookmark>

        <Bookmark Icon={TommorowIcon} onClick={() => setMode(Mode.TOMORROW)}>
          Jutro
        </Bookmark>

        <Bookmark Icon={IncomingIcon} onClick={() => setMode(Mode.WEEK)}>
          Nadchodzące 7 dni
        </Bookmark>
      </S.Menu>

      <Tasks mode={mode} />
    </>
  );
};
