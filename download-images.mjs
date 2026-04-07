import https from 'https';
import fs from 'fs';
import path from 'path';

const images = {
  // Homepage
  'hero-bg.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XnBuGyagGXC3U5tB36QLDsS1SK2IB0vBNcAOT35GkD3t5o45HhO79mQQrOet0upNR9OZV_DfSQeCmGPS7vdf-5Be3j14kZOSSCm62MDV7YC8mocyCllxZNcWVLsvFSPmfcFnv5MSiqn8iJPUPeKqf2DLD5Nxz3WDGXZcnjlKl7ZC-xEWmyBZbGdbOCn8MWCklU8vqEOoaYT--iiNx4BpqDvUIUC4m2VoKaUVb2n46yYlw7UaIPvGYafcghkb53vYmHIi50BhI7Q',
  'product-loc-xuan.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuATmx0P0i9d2CRa1R9XS_LaPWl4Hdn0WJ_rUBa8eB9HHHAeepeWWtbr2SApjXoPjTHB0_MOr3srGR-QNbphJ9BY4oS5DFlToLWfoHrtvySEutj2jqyK76bBzlYOxNFL-eLyc05qBUKxGHQ8Hqcpv1MkE7wZWxYmLYbA83hj3PfGEOE_RlsucIrfrTYdn1PhoPW-AUr1Now7ZlI7wvL_xoJta7-xmmAELuTtS2140GhNQHZ6hcmJ3aWqrRSDmXKdZRWbJX6EehTne3Q',
  'product-vang-ngot.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnhFOOENQZqoxzOsOGQAupKnRLrEMJxDCo-h-Aqek78FBGAf8vljPY27F5iQSSoUdrBvsTkjh8dSwNMmD_NVJ2MFTgd54FfUEMDHIukbcCOWOERMdlBWHlt-oANNNLlv7LMn54rsZXY-BvyZg9P1iIPuskgeIgS7waoILPCQ7M1tXKIZPIgrCsIMCwO2PqoOVXAFBqYqIQaZmj5O1Mktto554jf9t99V21RknQJ0AeTYU-u9PLtvj22o3EEUq77gSUaQIP4Agk0dk',
  'product-gio-tre.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbEdDaBpfvsx677Albuf13KcUvcT5wJPdNKdEcVJ8a7_rLJGn2KlF5uLnmb_k-oFh6icA4VU037jd9WDlti-F88NTx-qwJqxylCb4U54zZ_MV481CuRBJL_SSc7UQK3okOxXRJqvF7c7LC7PfhDPb6C8y5X0knJzgOK4b5ZGh7CCk41_VaZ5jSkMSa5IN7dcOubb4_AaYG6apxvB9H5OQGeazjmcO57QCEhwxyEfr4zjmqmO95b9011_PI6dQnHXFSqyP6f3NIg_I',
  'product-tra-xuan.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv2Y-9AG4AoqGJENWvcm-vr1vwPbFCb0I0SSxg4y3aJtlzoGAMgzlkyinlgpcDY0s3hugwmsCWRcK8lxUlKwAcvPyVrikj45qA6VxA79Cm047U2u70nMxJ6Bma3OgpPn45T4KvIINiS6vZd4AwQT0RlzvY5MJgkulU2kdM06bgMCyjn3W5zZfoYn4eQmTO1scGgM7QJE7xUfyRjgDft95e7JsDDKe8pRycM-YX24wljpRrzRyvmxHPxCXBLWRFsu7psxGhJcFfWfA',
  'cat-hop-qua.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrv8r4WqncqawbCbkmCN2axbTHCeaQg2rGVfd_3Bwg3fD0_FSo2r3YIBhzr-2zYw7P1T3mvt9jSAhpmCu4-YRxuCRn-7HX7hGnFOcJ5RqiKJjqZu-agI_ITKdeoYnceUOvPHTHBMw_sc7ry39VlwZlMqo7eWQ9V4zz8v4ucnn0npw_OBftDKAJ9LtnYER9xieO3X6SlD6dFAjA84D1rTUxk7j3j91Q3hTMxVq5fBn1N__erLW_MUbIT_aYRvuH-r0ZYFvwsFryPu4',
  'cat-gio-qua.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFAwExe5Cwoy8c-mbZz7-FSqA0tUuVjtRaBAtsZIT9VdsxcCMbE0DaCZfWrVuRsoxfMmqSg2VJTXEld4SlF07Dt4NDYAfrxCFWg6niRS69mFaGUxV7FF3M7tHmMuSOCdlUXGFJnPSS07lmk58DVHgvhdKFq-lhfaG4GOrgs_JwmZrnIPTA6nEhGHTB64esygGR4yYLAz_3lyYrZB-WbmOiJiOZ7Qunniw1wAXHSpzmYgFdiEoLXRnjJUdcEROXlGUwBne38-00tVY',
  'cat-ruou-tra.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMJZk2OgpTQNnOvWsXcAHqQySBJBmMfi5TbKrvI8qfLDgd8qgGOr2pvlPNCNZ650OguTuAJQTebQGZy4c95RS1eZKbSfCNRov3HhPni7tsJ5KyuMqatY5eLONBjPVyUIAGGRx5hoNAUWZ8A-JHm3xCv_9GisN9k-8rsg5ts49tqhHd9e4Qv4AlTosAOps3o5mRwB2zitUCVFQIzKM8J7uOFUqBqs1jgJqx5NtwlsYJhs_P05NMOeFTgyhPLdKb2XBQlscE8m9YytM',
  'cat-doanh-nghiep.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVkvD1Ay_Bh_5BicaC1WgjoAwuOzgOURBt86hK-nyuuMsrbmLOco5J0d2HMCcBsQVkYnQysGT7Bo1hKRlw9BvK5UnU7WtISRODhEd3fOPhvlYBt0NxcKasfAPHnoYMnzA9FCMlPVUvmnQl7E0iyTPN-ilEi1B9nWv4qIn_vR8JnZmZwEh129AwrwFrqkGO5e-E1Qyc984RJ9LVtZn_6TbNDR_TPqoBhf8Y6nnu3aus5tRIy_xQ5UNAIVPaSbrl5FMPYJU33FHFgc8',
  // Product List
  'list-an-khang.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO2RGH1lg2saeXj61LF7RKmeFSlLr9ADoy5TmLkiGrAEPf2JiHHd4rIXYgabq7habhx-ccIWwwd5Me5opacED36faNRnz2KxM18lL4qtGFs32bi1VjVTrZ3lhlIaIfEqiZgjjiFI-O8I0ov4CGppt098EV2b5PrDx0WDuT9QGTxY9PgErWf5EhMUWTqfftSU-Y0JwI9EfmPPWPF61zuH2r-0A0TVRxcNZG39DUBc0vpM2Fte1CccxVqL2vYEH9KuKejg8r8PMAg6g',
  'list-loc-xuan.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHi5eCfO86XNhrKBxBK4PuV2GLS8UxHXO-4n5NxP0gUdXal6rz8pWke9wkdokP8YLP9bk6iplvXSzk4LcFSJTAJne_CCWKHEeNyZqtqVwK464D8d4rK85k4Ksr_aLdTTto_ozqCzPpwe1UzwWpOTbawya9sjZw9-YdVJMyfYE130P4jHtTWYcD-0FUyc8Q9NuPILUfIYutuKPL0Ge_ouJ-I6wvSbQ_Qlp1y4N-60J8YwFJ64crONYxM2i59KEo3DTR7oLs7rCejJU',
  'list-tam-giao.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs2DDHvGHbACP6kzjnm2CZFnunWMMUHO282VHYwgBXar_oxVB6ypJhu8_b-teFy-uLigCgxmB5PlnqWaGRIk7sch4UL8TucHi7JfR9VQPSANt0ARZFRcUj7WqOZCkbicQAmcpI1SuQmVVk1GedL96Ei2oi2JnCBvnQEUACgxkEsuNUY2aYjBaqt8fFDk3e6vXaUGhui2Qg5dAKCOQriKFqiXvRW1gsokHyzDOeh5qFUpXQTpKX6s1uFrRKFdozI6YMS66oqVPfq-c',
  'list-phu-quy.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAvOWjBsasDSTwYxt2UlcAooofLrKYWkJh88zuCJuzX34usmDHYq533rVj7kvEcJXL-7G9lCmXT32gDPMprYQhERmmpkO5k4JXLJStAmTdfi1tkPCXonz30dwqXYqUhraMhoC6XntZ4G55VFl2CqoTydWcMP5NFMnPQougg4z-t7RQPPVrwMO6QaffKipZ92uXf2SkrpPYiI_G82S65iCtuIX62Q1J3j-5ZAs912b174sFeZrA0rlbJRNc8Qm4MoBSi5KbyxROIRo',
  'list-sum-vay.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy5a2vyUH6VDdRvbRfP_Hvrb2j5qsUgrCCvxsBRxMJdndlH1EP8Cy2iIk8X7l0FJ51bfX76wvkRfkfDHofPfUjL7q0LyQTzXvY8r__0pYcTMN4bcmWB3defTzLTRl1MWkg5FXJH-LAb5PmLlsB_cI35zy7mo0cl-MMNfWCbU4P-zucRYMcIkVuwhHkiSlvmlMAZPCsqgCozcA863hjm5J4VB6cpo3PVyXCoBs88l904AVjMUOVs3qgMJUI8oNKjE6Mm3o4954O2gs',
  'list-van-su.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB22gNP1ka-aT8pIs0Cx1rt9jcRWsimSUWs-3Yomwaxrejg-1a7h8qY6B03YMWfsUYFo4XRxPefVio4s1gZil8tFK4Sjq-vVPpNbI_W-ve61sFjS5LF8Bvve3E-TakB_UHNUHzlUaDL58BFcJ3kJO2KyQ7MaRWfDpWHUMdrcRXF14O-r7Y3smCzptMAmhNM5huoUcKfP6DkKItITiIgPQ9SbwMqgQoSKd9we7CfC9q_k2wyXJ9YWYljmnVGFnmQepx3bsbRWcwy2nc',
  // Product Detail
  'detail-main.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0YfAZXM9sn3PG2hOk5QZZ9By-cQ6AoCbcL_uVcjtjaHreYbVnWhHodAlvsvQnxbAJ06DT-jtmnxOd_YJbeiLL7EsNM-0I5UlP2-I-Jw1jPzn0dYBt9aQs5moVPXWMskAH9mwlkoM6OqOcxk4CO6DCDjT55qJ_Ki6Te6INJlqZO13X8Y4rI5hRuD7x0nWSl-3sYs0RfcvsDmaC8HwcjRdvfLWGCnqaphoS7wpQ8EbWKQMyhyq0SFsbjECISpZIgMeteaQM5rj55Q',
  'detail-thumb1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgVAV91FCILh0Tam8JtDi-0CkOZJEK-A8kJD-8DtKZGCbSxSNdK18luaKblU-hdoKaBGmVWcqw2bkv9ueMJCuqlbMmSgQ7Ug1dEB21rVKbVAsYCNut_xsUbQBMxJqRfNTfsgdey6Xdg0EcSEWNg3MN5uOaVUDuijLG_w0J0Dkr4VRG5VQl1wkNjXnX4SWg6U5u-RVX_38gcaszwGDPkxWMvSxu5iMspLnutXV8Y28cf5Yf2WOAJ6h_sYzL3q1V_KyVe-00FTWVrAA',
  'detail-thumb2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDHd_iY3ip73ejMEifJHVkdvccmOLl_FwL2iZBt8KB4ucT3iVh9_bQbxFS26UDy9amZZwzJBnlB8zLJcFW78iQHQNyVd2wIUFMd1xsBi3f-MTUlATobQr0H6F1FJq4KXMlOvupRWqaLQyInyW_vNrLIAoO0bj-k3qNpfb7jH3QG1TrnCSQ1zWNRsU302g088FtQt_Mi73v-_5472iyqE3JRu7NisKdMfyfDoo8tNrsARynxtoYvaYqlkqm2t_fdJ7oIhLsohuBG70',
  'detail-thumb3.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgWF29H-HMhKYYgQPq--h3lkopFran48a8EAr6-rsqG5VEratfw5OlhyqZ3skcbSeWNWW9YHkKTXG7ooe4wEg0VvXUDBlTqzPIV8LuyS-2DYwCkcfAV9Ag5lXI9bHTcM0uIpb4K_BtZajseuhj49ztkGp1ugHLaWj7GU38WSf5JBgBrgAggXgFjAvPfwMfIMQJM20nbCiEbeajdODFDGE1qsrGj4p3hwSDb710WfvtCz_0_MkgETvFK0j4GvHvQWyRzEq9Kk3kvMw',
  'detail-thumb4.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRgU1GzVNrkcq-XTs83VVv8mL7BxtFYsf1qAXsAgh6MZA6T9AtpVjGpTHGbpwpcLEdR4eI5X0Z8JxjXzbHehXb9zpE39CPYOcZeMI0cv-qc17fWA42Qqz_n8ycuhRo2LGK_PLIso71QleR934OQS5ojU9AMvGP3oy-uVc7Zrqiq1D_Fa7muAT2WMDzlxIffBj4B6Hpk3FRFfbw3u26CbGNr4bhosjrFkdDA4L7XfYpqDuGura8mqGjbgo_TD7zqL4htSSVxdZnuko',
  'avatar-tuan.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzT_-tvkpjMt2zMreLTRE1DHnSGUsvuP_6BVZzWSO7tODlkI8itd5xkoNO3PyokFVX4I0jZaSftZoDCMdYA3MnxxoG03iJrbXt3Elr6YMjKw_s4R6xAJb8zMuNnxcvTs8KsMrYUv0-uQagutbT3StaRi2fW-M-lqUmiFnvYN_fZfjv75pYRBpIz_0HMHPRlotgi8jm4tUcQc2Z6dwa5GDGe8b3CuOJND5kHS48BaY5wF_u2bW96KD_oBSK9QmxRQqoBBW3sTUiYck',
  'avatar-hang.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXTnqggR3d5Zxac6lsjka_uU2--62KQk2nIL3lNWr79ZjFJ3sYpBmoBFTtMm1ds9zf6L5Qirb9vauLHVRf-8ILXhCG7ZIca3Cr6Ko3NpClaEYVFOWYstB6RDvWCnViAFCl02xu87QV0py2d1bf-dPrCfa3DNxbs4P3quM4uZtaJIwYZv9Kgi1BosdEOAQ5AhPdGUkyfFBm2HdxfGojoT3vR0PyHpwOATLvCkC-7gjUW-rj59QYmlFIf0VzPyRIOpT5gfnL3nTKO1w',
  'avatar-hung.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgnIMLkv4V-gJ5JVBI2UeUSLxNthASUrcG-YDQAbIJLwHr8mmAvFap5hBKBnUiz1AOtjEI4vGLJha6ZxllpNCX--ufTc3dLNHQcvpW3cH0QiTGce8nrmtsUFVXu_1goUMjBDnlp0_BAM-HmcYAy_A97VEdMOPtBLuqpkKmAFxY0LXWt3ojmn9xrMJWtVRTg-ZikqKeiaDNqE1ZqcBFgwjUOZvwbXW5wE4jNiUdyHpKt2i0pskyjidaDLB92LqOLu6xJ-IqHN62Ao',
  'related-kim-mai.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_yFT4heIKj3Azuap3swiBJJIxFnpULfujYBuxsJSuU9g7R61QobunewPulJ9Q6uOUC_9HOuDkOfXRn3qgMT416TjTE5bFAGArucnxKhbabhOD8ARjZL4anuefzeXK7fLOyKFJJ4E86Q2gNAIQRanxBD45Ll1sQaBJoPKXTuil15eyGG3IWUVZhQpDeIorteOms6lKnbrc3ThZsBjuUp53-bTydGvYuxz1cJ-1N7bTVvckIvVrRjz6QhYSddk9q1sfJdkLeOFFQE',
  'related-dai-cat.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwbTXoFfyn6gLEAkrIsreL_85fEQQwLaPrJlXXr5dsE1NPAY1BL5CSdO763wjsPLCdP6ZC_aDwMs2oerq4NxIYU3FSRXsk2Upo3zli3yvYUla_6CDT77JaFrWU2-gZxQpcoO5Rn9efnTZHaiTdKBWKBdACRDbaWuKBVFq_XwamHk3ASCLxszC4PL0Jdz4NNJ11l4YjxDF1oBxKQhEYvJXk81V89fhBxEpMKUhb8D-pB_YcWmd2HKL0y5Q3UpwVI5BQGTIdWe0evwk',
  'related-tra-dao.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuUvOvXX3Kllml4sxy8wst0Bi-EM2Evrxa4_9v3GUcV5b5f0DExmx0J377MS9NSM8USIkjqqBXJepTiNHl_UTNXmT1R5yb-Wrg5uU_aRvOsrIqFT959oBcZHsW07kBvE-LbiA_zLKGCed8iYqSBpkeL2mw7Z1YqEf817X3fwG9bGjFb52U20hdlUVvsqMehCxfXJOW6Ebe1u_nrz5Zx4drZpltxpJZ-EdgbzZBnb6C6K-blZUWwDxtBaZQ7vPBG7IgdETIF3lj4CQ',
  // Cart
  'cart-phu-quy.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_42r1CG6M8idh1pFN8kipmn5DaxbeJPmUwqTD53wSlBQRpsOh_5MwCLBYjJc_NDPcK5yAp9H_Qf5uxGwxothABPHuhk1keceCB6Mf_9muyqNKkajN0qbL9bk8KVY2Aek8Q8xDV_lcB5elERFYGm2sAipUizER-X6yoBpS51XeSq0N1XZKRnF1w9_bqxfS9AUyRYOV4jj9Fcg_HKrGB6CFymPw2aqvpEr6v9rylYeeAMXfkh7u4nQ1Jza-UvP54QwECy7x3tvx0Ss',
  'cart-tra-tuyet.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgYo640FazHo2oeMxsW8TyLaXT97sv_8_dQJiklezRCrQ2YWv7WD92DlFgDid-_jydcNKK-X5vh3EpC7ybiwVGIs6DBLXG8v5_83VTV5CTAtePzja-FmvHHhmHAeQJTPcI3UbzDrn6-einidsG68e0lYie3lMhpdYWZm5MV-soZdZ3_kd3zFnrZZAJMfYFqqc-3tFglGVbPZPag5uUARiMXXCYlpCHPXDAR97lm-otX4gcnhwKwi8qkGGs3P_QD1n0Yju1BWgToSY',
};

const dir = path.join(process.cwd(), 'public', 'images');
fs.mkdirSync(dir, { recursive: true });

function download(filename, url) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(dir, filename);
    if (fs.existsSync(filepath)) {
      console.log(`SKIP: ${filename}`);
      return resolve();
    }
    const file = fs.createWriteStream(filepath);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (r) => {
          r.pipe(file);
          file.on('finish', () => { file.close(); console.log(`OK: ${filename}`); resolve(); });
        }).on('error', reject);
      } else {
        res.pipe(file);
        file.on('finish', () => { file.close(); console.log(`OK: ${filename}`); resolve(); });
      }
    }).on('error', reject);
  });
}

(async () => {
  const entries = Object.entries(images);
  const batch = 5;
  for (let i = 0; i < entries.length; i += batch) {
    await Promise.all(entries.slice(i, i + batch).map(([f, u]) => download(f, u)));
  }
  console.log('All images downloaded!');
})();
