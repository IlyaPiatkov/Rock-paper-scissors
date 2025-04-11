import React from "react"
import { useTranslation, Trans } from "react-i18next"

import {
  Text,
  Title,
  MainContent,
  List,
  ListTitle,
  ListItem,
  Link
} from "../../ui"
import { CommonContentTemplate } from "../../features/common/templates/common-content"

export const PrivacyPoliciesPage = () => {
  const [t] = useTranslation(["info"])

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title center large>
          {t("info:privacyPolicies")}
        </Title>

        <List primary>
          <ListItem primary>
            <ListTitle primary big>
              {t("info:item1.title")}
            </ListTitle>
            <Text medium>{t("info:item1.subtitle")}</Text>
            <List secondary>
              <ListItem secondary medium>
                <Text>{t("info:item1.text1")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item1.text2">
                    1<Link to="/">2</Link>
                  </Trans>
                </Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem primary>
            <ListTitle primary big>
              {t("info:item2.title")}
            </ListTitle>
            <List secondary>
              <ListItem secondary medium>
                <Text>{t("info:item2.text1")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text2")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item2.text3">
                    1<Link to="/">2</Link>
                  </Trans>
                </Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text4")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text5")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text6")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text7")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item2.text8">
                    1<Link to="/">2</Link>
                  </Trans>
                </Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item2.text9">
                    1<Link to="/">2</Link>
                  </Trans>
                </Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text10")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text11")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text12")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item2.text13")}</Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem primary>
            <ListTitle primary big>
              {t("info:item3.title")}
            </ListTitle>
            <List secondary>
              <ListItem secondary medium>
                <Text>{t("info:item3.text1")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item3.text2")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item3.text3")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item3.text4")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item3.text5")}</Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem primary>
            <ListTitle primary big>
              {t("info:item4.title")}
            </ListTitle>
            <List secondary>
              <ListItem secondary medium>
                <Text>{t("info:item4.text1")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item4.text2">
                    1
                    <Link as="a" href="mailto:admin@tornadogame.club">
                      2
                    </Link>
                  </Trans>
                </Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item4.text3")}</Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem primary>
            <ListTitle primary big>
              {t("info:item5.title")}
            </ListTitle>
            <List secondary>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item5.text1">
                    1<Link to="/">2</Link>
                  </Trans>
                </Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item5.text2")}</Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem primary>
            <ListTitle primary big>
              {t("info:item6.title")}
            </ListTitle>
            <Text medium>{t("info:item6.subtitle")}</Text>
            <List secondary>
              <ListItem secondary medium>
                <Text>{t("info:item6.text1")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item6.text2")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item6.text3">
                    1
                    <Link as="a" href="mailto:admin@tornadogame.club">
                      2
                    </Link>
                  </Trans>
                </Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item6.text4">
                    1
                    <Link as="a" href="mailto:admin@tornadogame.club">
                      2
                    </Link>
                  </Trans>
                </Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem primary>
            <ListTitle primary big>
              {t("info:item7.title")}
            </ListTitle>
            <List secondary>
              <ListItem secondary medium>
                <Text>{t("info:item7.text1")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item7.text2")}</Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem primary>
            <ListTitle primary big>
              {t("info:item8.title")}
            </ListTitle>
            <List secondary>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item8.text1">
                    1
                    <Link as="a" href="mailto:admin@tornadogame.club">
                      2
                    </Link>
                  </Trans>
                </Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>{t("info:item8.text2")}</Text>
              </ListItem>
              <ListItem secondary medium>
                <Text>
                  <Trans i18nKey="info:item8.text3">
                    1<Link to="/privacy-policies">2</Link>
                  </Trans>
                </Text>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </MainContent>
    </CommonContentTemplate>
  )
}
